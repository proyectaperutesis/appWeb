import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { getToken } from '../auth/storage/toke.storage';
import { getNombreUsuario } from '../auth/storage/cabecera.storage';

@Injectable()
export abstract class BaseService {
  protected obtenerHeader(): HttpHeaders {
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + getToken());
    headers.append('nombreUsuario', getNombreUsuario());

    return headers;
  }
}
