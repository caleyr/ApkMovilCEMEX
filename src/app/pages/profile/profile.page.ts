/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, Inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user/user';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from '../../services/profile/profile.service';
import { LoginService } from '../../services/auth/login.service';
import { CompaniesService } from '../../services/companies/companies.service';
import { UserDetail } from '../../models/user-detail.model';
import { ApiService } from '../../services/auth/api.service';
import { UserService } from '../../services/user.service';
import { MsalService } from '@azure/msal-angular';
import { DOCUMENT } from '@angular/common';
import { TextResponseService } from '../../services/text-response.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  id : number;

  profile : UserDetail;

  showModalArchiveDocumentCompany = false;
  showModalIndentityCard = false;
  showModalLicence = false;
  showModalSecurityCardApp = false;
  titleSubs: Subscription;
  loading = false;

  linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";

  suscripcion: Subscription;

  constructor(
    private router: Router,
    private apiService : ApiService,
    private userService : UserService,
    private authService : MsalService,
    public textResp : TextResponseService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  async ngOnInit() {
    this.loading = true;
    this.id = this.apiService.userProfile.UserId;
    this.suscripcion = this.userService.refresh$.subscribe(() => {
      this.loading = true;
      this.getDataUserProfile();
    });
    this.getDataUserProfile();
  }

  getDataUserProfile(){
    this.userService.getUserEmailLogin(this.authService.instance.getAllAccounts()[0].idTokenClaims.extension_mail).subscribe({
      next : (data: any) =>{
        this.profile = data.data[0];
        this.apiService.userProfile = data.data[0];
      },
      complete : () => {
        this.loading = false;
      }
    });
  }
  
  getTitleRuote() {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot['_routerState'].url),
      );
  }

  onUrl(url : string){
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.rel = "noopener"
    link.click();
    link.remove();
  }

  showModalIndentity(){
    if(this.profile.CedulaDocumento){
      this.showModalIndentityCard = true;
    }
  }
  showModalDocumentCompany(){
    if(this.profile.CodeSap){
      this.showModalArchiveDocumentCompany = true;
    }
  }
  showModalDrivingLicence(){
     if(this.profile.LicenciaConduccion){
         this.showModalLicence = true;
       }
  }
  showModalSecurityCard(){
    if(this.profile.CarnetSeguridadIndustrial ){
        this.showModalSecurityCardApp = true;
      }
 }
  closeModalIdentity(){
    this.showModalIndentityCard = false;
  }
  closeModalLicence(){
    this.showModalLicence = false;
  }
  closeModalDocumentCompany(){
    this.showModalArchiveDocumentCompany = false;
  }
  closeModalSecurityCard(){
    this.showModalSecurityCardApp = false;
  }

}
