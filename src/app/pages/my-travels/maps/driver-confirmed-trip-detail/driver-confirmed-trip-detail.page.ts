import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DetailsTripPreviousPage } from '../../details-trip-previous/details-trip-previous.page';
import { ModalDetailMapDriveComponent } from './components/modal-detail-map-drive/modal-detail-map-drive.component';
import { TravelService } from '../../../../services/travels/travel.service';
import { Travel } from 'src/app/interfaces/travels/travel';
import { GoogleService } from '../../../../services/google.service';
import { Subscription } from 'rxjs';
import { ClearWatchOptions, Geolocation } from '@capacitor/geolocation';
declare var google;

@Component({
  selector: 'app-driver-confirmed-trip-detail',
  templateUrl: './driver-confirmed-trip-detail.page.html',
  styleUrls: ['./driver-confirmed-trip-detail.page.scss'],
})
export class DriverConfirmedTripDetailPage implements OnInit, AfterViewInit {

  id = null;

  contador = 0;

  @ViewChild('mapVer') divMap: ElementRef;
  map : any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  marker = new google.maps.Marker();
  watchId;

  estado = 1;
  constador = 0;

  travel = new Travel();

  watch= null;

  loading = false;

  mapOptions = {
        center: {
            lat: 25.686614,
            lng: -100.316113
            //to get the latitude and longitude use: http://www.latlong.net/
        },
        zoom: 12,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ],
        scaleControl: false,
        streetViewControl: false,
        scrollwheel: false,
        disableDefaultUI: true,
        clickableIcons: false,
    }

  constructor(
    private modalController: ModalController,
    private travelService : TravelService,
    private location : Location,
    private googleService : GoogleService
    ) {
      Geolocation.checkPermissions();
  }

  async ngOnInit() {
    this.loading = true;
    this.travelService.changeDataRefresh.subscribe(async () =>{
      this.loading = true;
      await this.getData();
      if(this.travel.loadEnd !== 'null' && this.travel.tripStarTime === null && this.travel.dowloadStar === 'null'){
        await this.calculateRoute();
      }else if(this.travel.dowloadStar !== 'null' || this.travel.dowloadEnd !== 'null'){
        this.deleteMarker();
        this.changeRoute();
        this.loading = false;
      }else{
        this.loading = false;
      }
    });
    this.googleService.loadingChange.subscribe(data=>{
      this.loading = data;
    })
  }

  async ngAfterViewInit(){
    await this.getData(); 
    this.modalData(this.travel);
    await this.loadMap();
    this.loading = false;
  }

  async loadMap() {   
    this.map = new google.maps.Map(this.divMap.nativeElement, this.mapOptions);
    this.directionsDisplay.setMap(this.map);    
    this.marker.setMap(this.map);
    await this.changeRoute();
    if(this.travel.loadEnd !== 'null' && this.travel.tripStarTime === null && this.travel.dowloadStar === 'null'){
      await this.calculateRoute();
    }else if(this.travel.dowloadStar !== 'null' || this.travel.dowloadEnd !== 'null'){
      this.deleteMarker();
      this.changeRoute();
      this.loading = false;
    }
  }

  getData() {
    return new Promise((resolve)=>{
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.travel = data.data;
        resolve(true);
      });
    });
  }

  async calculateRoute(){
    this.watchId = Geolocation.watchPosition({
      enableHighAccuracy: true, timeout: 3000, maximumAge: Infinity
    },async position =>{
      const ubicacionUser = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.googleService.changeDistance(ubicacionUser);
      await this.createPonintUser(ubicacionUser);
    });
  }  

  async createPonintUser(ubicacion : any){   
    this.marker.setPosition(ubicacion);
    this.map.setCenter(ubicacion);
    this.map.setZoom(17);
    this.loading = false;
  }

  changeRoute(){
    return new Promise((resolve)=>{
      var route;
      this.directionsService.route({
        origin: {lat : this.travel.latitudeSource, lng : this.travel.longitudeSource},
        destination: {lat : this.travel.latitudeDestiny, lng : this.travel.longitudeDestiny},
        travelMode: google.maps.TravelMode.DRIVING,
      }, async ( response, status)  => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
          route = await response.routes[0];
          this.googleService.changeDistanceO(route.legs[0].end_location);
          resolve(true);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      });
    })    
  }

  async onBack(){    
    const opt: ClearWatchOptions = {id: await this.watchId};
    this.location.back();
    this.modalController.dismiss();
    Geolocation.clearWatch(opt);
    this.watchId.unsubscribe();
  }

  async deleteMarker(){
    this.marker.setMap(null);
    const opt: ClearWatchOptions = {id: await this.watchId};
    Geolocation.clearWatch(opt);
    this.watchId.unsubscribe();
  }

  

  async modalData(travelD : Travel){
    const modal = await this.modalController.create({
      component: ModalDetailMapDriveComponent,
      initialBreakpoint : 0.38,
      breakpoints : [0.1, 0.38, 0.70, 1],
      backdropDismiss : false,
      backdropBreakpoint : 0.5,
      componentProps:{
        travelDetail : travelD        
      }
    })
    await modal.present();
  }
}