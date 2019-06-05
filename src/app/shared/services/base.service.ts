import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { getToken } from '../auth/storage/token.storage';
import { getNombreUsuario } from '../auth/storage/cabecera.storage';
import { throwError } from 'rxjs';

@Injectable()
export abstract class BaseService {
  protected obtenerHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + getToken());

    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append('Authorization', 'Bearer ' + getToken());
    // headers = headers.append('nombreUsuario', getNombreUsuario());

    return headers;
  }

  protected handleError(error: HttpErrorResponse) {
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
