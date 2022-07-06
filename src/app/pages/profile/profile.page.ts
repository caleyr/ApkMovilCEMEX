/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user/user';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from '../../services/profile/profile.service';
import { LoginService } from '../../services/auth/login.service';
import { CompaniesService } from '../../services/companies/companies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  profile : Profile = new Profile();

  showModalArchiveDocumentCompany = false;
  showModalIndentityCard = false;
  showModalLicence = false;
  showModalSecurityCardApp = false;
  titleSubs: Subscription;
  loading = false;

  constructor(
    private router: Router,
    private loginService : LoginService,
    private companiesService : CompaniesService
  ) {

    this.titleSubs = this.getTitleRuote().subscribe(event =>{
       if(event === '/app/profile'){
        this.loading = true;
        this.profile = this.loginService.profileUser;
        this.loading = false;
       }
    });
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  async ngOnInit() {
    this.loading = true;
    this.profile = this.loginService.profileUser;
    this.companiesService.getCompany(this.profile.CompanyId).subscribe(data=>{
      this.profile.CompanyName = data.companyName;      
      this.loading = false;
    });
    //this.getDataUserProfile();
  }
  getTitleRuote() {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot['_routerState'].url),
      );
  }

  /*
  async getDataUserProfile(){
    let urlactual = '';
    this.loading = true;
    await this.profileService.getDataUser(this.user.email).subscribe(async resp=>{
      const rol =  resp.roles.map(item =>  item);
      this.user.firstName = resp.user.firstName;
      this.user.lastName = resp.user.lastName;
      this.user.document = resp.user.document;
      this.user.roles = rol.toString();
      this.user.documentIdentityCardFrontal = resp.user.documentIdentityCardFrontal;
      this.user.documentIdentityCardBack = resp.user.documentIdentityCardBack;

      this.user.driver.codeSap = resp.codeSap;
      this.user.driver.documentDrivinglicenseFrontal = resp.documentDrivinglicenseFrontal;
      this.user.driver.documentDrivinglicenseBack = resp.documentDrivinglicenseBack;
      this.user.driver.documentSecurityCard = resp.documentSecurityCard;

      this.user.company.companyName = resp.companyName;
      this.user.company.documentCompany = resp.documentCompany;

      this.loading = false;
   }, error =>{
      this.loading = false;
   });
      urlactual = this.user.driver.documentDrivinglicenseFrontal;
  }*/

  showModalIndentity(){
    if(this.profile.DocumentIdentityCard){
      this.showModalIndentityCard = true;
    }
  }
  showModalDocumentCompany(){
    if(this.profile.SapCode){
      this.showModalArchiveDocumentCompany = true;
    }
  }
  showModalDrivingLicence(){
     if(this.profile.Drivinglicense){
         this.showModalLicence = true;
       }
  }
  showModalSecurityCard(){
    if(this.profile.SecurityCard ){
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
