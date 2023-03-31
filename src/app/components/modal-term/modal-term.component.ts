import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/auth/api.service';
import { UserService } from '../../services/user.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-modal-term',
  templateUrl: './modal-term.component.html',
  styleUrls: ['./modal-term.component.scss'],
})
export class ModalTermComponent implements OnInit {

  @Input() alertShow = false;

  @Output()
  propagar = new EventEmitter<boolean>();

  term: any;

  dataFormS: FormData;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private notiServices : NotificationsService
  ) { }

  ngOnInit(): void {
  }

  async logout() {
    await this.deleteTokenNotification();
    this.apiService.logout();
  }

  deleteTokenNotification() {
    return new Promise<boolean>((resolve, reject)=>{
      this.notiServices.deleteUserMobile().subscribe({
        next: (data) => {
          resolve(true);
        },
        error: (err) => {
          resolve(false);
        }
      });
    });   
  }

  changeTerm() {
    this.dataFormS = new FormData();
    this.dataFormS.append('UserId', this.apiService.userProfile.UserId.toString());
    this.dataFormS.append('policiesPermission', 'true');
    this.userService.updateProfile(this.dataFormS).subscribe({
      next : (data) => {
        alert(JSON.stringify(data.data));
        this.apiService.userProfile.policiesPermission = 'true';
        this.alertShow = false;
        this.propagar.emit(true);
      },
      error : (err) => {
        alert(err);
        this.logout();
      }
    });
  }

}
