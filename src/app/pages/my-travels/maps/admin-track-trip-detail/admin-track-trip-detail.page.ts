import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ClearWatchOptions, Geolocation } from '@capacitor/geolocation';
import { ModalController, NavController } from '@ionic/angular';
import { Travel } from '../../../../interfaces/travels/travel';
import { ModalDetailMapAdminComponent } from './components/modal-detail-map-admin/modal-detail-map-admin.component';
import { Subscription } from 'rxjs';
import { TravelService } from '../../../../services/travels/travel.service';
declare var google;

@Component({
  selector: 'app-admin-track-trip-detail',
  templateUrl: './admin-track-trip-detail.page.html',
  styleUrls: ['./admin-track-trip-detail.page.scss'],
})
export class AdminTrackTripDetailPage implements OnInit, AfterViewInit {

  id = null;
  travel = new Travel();
  
  @ViewChild('mapVer') divMap: ElementRef;
  map : any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

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
    private location : Location,
    private modalController : ModalController,
    private travelService : TravelService,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
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
    this.location.back();
    this.modalController.dismiss();
  }

  onRootNewMessage(){
    this.navCtrl.navigateRoot('/app/my-travels/admin-track-trip-detail/new-drive-message');
    this.modalController.dismiss();
  }

  async modalData(travelD : Travel){
    const modal = await this.modalController.create({
      component: ModalDetailMapAdminComponent,
      initialBreakpoint : 0.35,
      breakpoints : [0.1, 0.35],
      backdropDismiss : false,
      backdropBreakpoint : 0.5,
      componentProps:{
        travelDetail : travelD        
      }
    })
    await modal.present();
  }

}
