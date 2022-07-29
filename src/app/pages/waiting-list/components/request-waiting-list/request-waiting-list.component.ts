import { LoginService } from 'src/app/services/auth/login.service';
import { RequestService } from './../../../../services/request.service';
import { Router } from '@angular/router';
import { Request } from './../../models/request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-waiting-list',
  templateUrl: './request-waiting-list.component.html',
  styleUrls: ['./request-waiting-list.component.scss'],
})
export class RequestWaitingListComponent implements OnInit {

  requestsList: Request[];

  constructor(private router: Router,
    private requestService: RequestService) { }

  ngOnInit() {
    this.getData();
  }

  detailRequest(id: string) {
    this.requestService.id = id;
    this.router.navigateByUrl('dashboard/lista-de-espera/ver-solicitud')
  }

  getData() {
    this.requestService.getRequestByIdUser("").subscribe(data => {
      this.requestsList = data;
    })
  }

}
