import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Configuration } from 'src/app/shared/configuration/app.constants';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LoginService extends BaseService {

  private URLAuth: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    super();
    this.URLAuth = this._configuration.Server + 'auth';
  }

  public login(data: any): Observable<any>{
    return this.http.post<any>(this.URLAuth + '/login', data, {headers: this.obtenerHeader()}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
