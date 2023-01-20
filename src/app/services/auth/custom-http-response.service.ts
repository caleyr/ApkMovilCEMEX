import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
declare var cordova;

@Injectable({
  providedIn: 'root'
})
export class CustomHttpResponseService implements HttpInterceptor {

  constructor() { }
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Entro');    
    const headers = {};
    const params = {};
    const { method, url } = request;
    const platform = 'corodova'; // Get this value from platform status  like android, ios...etc
    return (platform === 'corodova'
      ? this.callNative(url, method, headers, params)
      : next.handle(request)
    ).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.type === 4) {
          }
        }
      },
      (error: any) => {
        if (error instanceof HttpErrorResponse) {
        }
      }
    );
  }

  callNative(url, method, headers, params) {
    return Observable.create(ob => {
      switch (method) {
        case 'GET':
          cordova.plugin.http.get(
            url,
            headers,
            params,
            this.successCallback(ob),
            this.errorCallback(ob)
          );
          break;
        case 'POST':
          cordova.plugin.http.post(
            url,
            headers,
            params,
            this.successCallback(ob),
            this.errorCallback(ob)
          );
          break;
        case 'PUT':
          cordova.plugin.http.put(
            url,
            headers,
            params,
            this.successCallback(ob),
            this.errorCallback(ob)
          );
          break;
        case 'DELTER':
          cordova.plugin.http.delete(
            url,
            headers,
            params,
            this.successCallback(ob),
            this.errorCallback(ob)
          );
          break;
      }
    });
  }
  successCallback(ob) {
    return (response: any) => {
      ob.next(new HttpResponse({ body: JSON.parse(response.data) }));
      ob.complete();
    };
  }
  errorCallback(ob) {
    return (response: any) => {
      ob.next(new HttpErrorResponse({ error: JSON.parse(response.error) }));
      ob.complete();
    };
  }
}
