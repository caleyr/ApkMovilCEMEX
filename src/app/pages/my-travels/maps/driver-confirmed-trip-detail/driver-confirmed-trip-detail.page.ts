import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DetailsTripPreviousPage } from '../../details-trip-previous/details-trip-previous.page';
import { ModalDetailMapDriveComponent } from './components/modal-detail-map-drive/modal-detail-map-drive.component';
import { TravelService } from '../../../../services/travels/travel.service';
import { Travel } from 'src/app/interfaces/travels/travel';
import { GoogleService } from '../../../../services/google.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
declare var google;

@Component({
  selector: 'app-driver-confirmed-trip-detail',
  templateUrl: './driver-confirmed-trip-detail.page.html',
  styleUrls: ['./driver-confirmed-trip-detail.page.scss'],
})
export class DriverConfirmedTripDetailPage implements OnInit, AfterViewInit {

  id = null;

  @ViewChild('mapVer') divMap: ElementRef;
  map : any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay;

  origin = { lat: 4.658383846282959, lng: -74.09394073486328 };
  // Parque la 93
  destination = { lat: 4.676802158355713, lng: -74.04825592041016 };

  estado = 1;

  travel = new Travel();

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
        draggable: true,
        disableDefaultUI: true,
        clickableIcons: false,
    }

  suscripcion : Subscription;

  constructor(
    private modalController: ModalController,
    private travelService : TravelService,
    private location : Location,
    private googleService : GoogleService
    ) { }

  async ngOnInit() {
    this.suscripcion = this.googleService.refresh$.subscribe(() =>{
      this.getData();
    });
    this.getData();    
  }

  ngAfterViewInit(){
    this.map = new google.maps.Map(this.divMap.nativeElement, this.mapOptions);
    this.calculateRoute();
  }

  getData() {
    if (this.travelService.id !== null) {
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.travel = data.data;
        this.modalController.dismiss(); 
        this.modalData(this.travel);     
      });
    }
  }

  onBack(){
    this.location.back();
    this.modalController.dismiss();
  }

  async calculateRoute() {
    var route;
    var duration = 0;
    var distance = 0;
      this.directionsService.route({
        origin: this.origin,
        destination: this.destination,
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

  async modalData(travelD : Travel){
    const modal = await this.modalController.create({
      component: ModalDetailMapDriveComponent,
      cssClass: 'message-modal',
      initialBreakpoint : 0.38,
      breakpoints : [0.1, 0.38, 1],
      backdropDismiss : false,
      backdropBreakpoint : 0.5,
      componentProps:{
        travelDetail : travelD        
      }
    })
    await modal.present();
  }

}
