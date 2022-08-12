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
  marker;
  watchId;

  estado = 1;

  travel = new Travel();

  watch= null;

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

  suscripcion : Subscription;

  constructor(
    private modalController: ModalController,
    private travelService : TravelService,
    private location : Location,
    private googleService : GoogleService
    ) {
      Geolocation.checkPermissions();
  }

  async ngOnInit() {
    this.suscripcion = this.travelService.refresh$.subscribe(async () =>{
      await this.getData();
      if(this.travel.statusTravel === 5){
        this.calculateRouteNormal();
      }
    });
  }

  async ngAfterViewInit(){    
    await this.getData(); 
    this.modalData(this.travel);
    await this.loadMap();
  }

  async loadMap() {   
    this.map = new google.maps.Map(this.divMap.nativeElement, this.mapOptions);
    this.directionsDisplay.setMap(this.map);
    this.calculateRoute();
    if(this.travel.statusTravel === 5){
      this.calculateRouteNormal();
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

  async calculateRouteNormal() {
    this.watchId = Geolocation.watchPosition({
      enableHighAccuracy: true, timeout: 1000, maximumAge: Infinity
    },async position =>{
      const ubicacion = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      await this.createPonintUser(ubicacion);
    });
  }

  async createPonintUser(ubicacion : any){ 
    if(this.marker === undefined){
      this.marker = new google.maps.Marker({
        position: ubicacion,
        map: this.map,
      });
    }else{
      this.marker.setPosition(ubicacion);
    }
    this.map.setCenter(ubicacion);
    this.map.setZoom(17);
  }

  async calculateRoute() {
    var route;
    var duration = 0;
    var distance = 0;
      this.directionsService.route({
        origin: {lat : this.travel.latitudeSource, lng : this.travel.longitudeSource},
        destination: {lat : this.travel.latitudeDestiny, lng : this.travel.longitudeDestiny},
        travelMode: google.maps.TravelMode.DRIVING,
      }, async ( response, status)  => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay = new google.maps.DirectionsRenderer({
            map: this.map,
            directions: response
          });
          route = await response.routes[0];
          route.legs.forEach(function (leg) {
            duration += leg.duration.value/60;
            distance += leg.distance.value/1000;
          });
        } else {
          alert('Could not display directions due to: ' + status);
        }
    });
  }

  async onBack(){    
    const opt: ClearWatchOptions = {id: await this.watchId};
    this.location.back();
    this.modalController.dismiss();
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
