import { LoginService } from 'src/app/services/auth/login.service';
import { RequestService } from './../../../../services/request.service';
import { Router } from '@angular/router';
import { Request } from './../../models/request';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-waiting-list',
  templateUrl: './request-waiting-list.component.html',
  styleUrls: ['./request-waiting-list.component.scss'],
})
export class RequestWaitingListComponent implements OnInit {

  @Input() requests: Request[];

  constructor(private router: Router,
    private requestService: RequestService,
    private loginService: LoginService) { }

  ngOnInit() { }

}
