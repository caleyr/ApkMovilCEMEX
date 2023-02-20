import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { from, Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { Companies } from '../../interfaces/companies/companies';
import { switchMap, filter, take, finalize, catchError, map } from 'rxjs/operators';
import { Http, HttpOptions } from '@capacitor-community/http';
import { ApiService } from '../auth/api.service';
import { environment } from 'src/environments/environment';
import { HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  isRefreshingToken = false;

  constructor(private HttpC: HTTP, private apiService: ApiService, private authService: MsalService) { }

  doPostFormData(url, data) {
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('multipart');
    return from(this.HttpC.sendRequest(url, { method: 'post', data: data, headers: {}, responseType: 'json' }));
  }

  doPutFormData(url, data) {
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('multipart');
    return from(this.HttpC.sendRequest(url, { method: 'put', data: data, headers: {}, responseType: 'json' }));
  }

  doPost(url, data) {
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('json');
    return from(this.HttpC.sendRequest(url, { method: 'post', data: data, headers: {}, responseType: 'json' }));
  }

  doPut(url, data) {
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('json');
    return from(this.HttpC.sendRequest(url, { method: 'put', data: data, headers: {}, responseType: 'json' }));
  }

  doGet(url) {
    return from(this.HttpC.sendRequest(url, { method: 'get', headers: {}, responseType: 'json' })).pipe(
      catchError(err => {
        console.log('ERROR ' + JSON.stringify(err));
        return throwError(err);
      })
    );
  }

  doGetPrueba(url) {
    return this.HttpC.sendRequest(url, { method: 'get', headers: {}, responseType: 'json' });
  }


  fetch(url, data, type, formD = false, header = true, file = false) {
    this.HttpC.clearCookies();
    let headers;

    if (formD) {
      this.HttpC.setDataSerializer('multipart');
    } else {
      this.HttpC.setDataSerializer('json');
    }

    if (header) {
      const headersTrue = {
        'Authorization': `Bearer ${this.apiService.currentAccessToken}`,
        'X-IBM-Client-Id': 'notneeded',
        'Accept-Language': 'en-US',
        'jwt': 'temp',
        'Ocp-Apim-Subscription-Key': '25eada0c438745e18701f00d75188597',
        'Ocp-Apim-Trace': 'true'
      };
      headers = headersTrue;
    } else {
      const headersFalse = {
        'X-IBM-Client-Id': 'notneeded',
        'Accept-Language': 'en-US',
        'Ocp-Apim-Subscription-Key': '25eada0c438745e18701f00d75188597',
        'Ocp-Apim-Trace': 'true'
      };
      headers = headersFalse;
    }

    if (file) {
      return from(this.HttpC.sendRequest(url, { method: type, headers: headers, responseType: 'json', name: data.name, filePath: data.file })).pipe(
        catchError(err => {
          if (err) {
            switch (err.status) {
              case 401:
                return this.handle401Error(url, data, type, formD, header);
              case 500:
                return of(undefined);
              default:
                return of(undefined);
            }
          }
        })
      );
    } else {
      return from(this.HttpC.sendRequest(url, { method: type, data: data, headers: headers, responseType: 'json' })).pipe(
        catchError(err => {
          if (err) {
            switch (err.status) {
              case 401:
                return this.handle401Error(url, data, type, formD, header);
              case 500:
                return of(undefined);
              default:
                return of(undefined);
            }
          }
        })
      );
    }
  }

  private handle401Error(url, data, type, formD = false, header = true): Observable<any> {
    return this.apiService.getNewAccessToken().pipe(
      switchMap((token: any) => {
        if (token) {
          const accessToken = token;
          return this.apiService.storeAccessToken(accessToken).pipe(
            switchMap(_ => {
              return this.fetch(url, data, type, formD, header);
            }),
            catchError(() => of(this.apiService.logout()))
          );
        } else {
          return of(null);
        }
      }),
      catchError((err) => {
        console.log('Error nice ' + JSON.stringify(err));
        this.apiService.logout();
        return of(null);;
      })
    );
  }

  //DATOS

  doPostFormDataUser(url, data: FormData) {
    this.HttpC.setRequestTimeout(5.0);
    this.HttpC.sendRequest(url, { method: 'post', data: data, serializer: 'multipart', headers: {}, responseType: 'json' }).then(data => {
      console.log(data);
    }).catch((error) => {
      alert('Error' + error);
    })
  }

  uploadFile(data, filename) {
    const dataF = new FormData();
    dataF.append('Drivinglicense', data, filename);
    var url = 'https://uscldcnxapmd01.azure-api.net/v1/ltm-load/company/companies/1';
    return this.HttpC.sendRequest(url, { method: 'put', data: dataF, serializer: 'multipart', headers: {}, responseType: 'json' });
  }
}
