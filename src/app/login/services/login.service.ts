import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from 'src/app/shared/configuration/app.constants';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService extends BaseService {

  private URLAuth: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    super();
    this.URLAuth = this._configuration.Server + 'auth';
  }

  public login(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('authorization', 'Bearer adasdasd');
    headers.set('Authorization', 'Bearer adasdasd');
    return this.http.post(this.URLAuth + '/login', data, {headers: headers}).pipe(catchError(this.handleError));
  }
}
