import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Configuration } from 'src/app/shared/configuration/app.constants';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProyectoLeyService extends BaseService{

  private URLProyectoLey: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    super();
    this.URLProyectoLey = this._configuration.Server + 'proyectoLey';
  }

  public getMisProyectosLey(params: any): Observable<any>{
    let queryParams: HttpParams = new HttpParams().set('idUsuario', params.idUsuario);

    // if(params.estado !== undefined && params.estado !== null){
    //   queryParams.append('estado', params.estado);
    // }
    // queryParams.append('idUsuario', params.idUsuario);

    let options = {
      headers: this.obtenerHeader(),
      params: queryParams
    };
  
    console.log(this.obtenerHeader());
    
    return this.http.get<any>(this.URLProyectoLey + '/misProyectoLey', options ).pipe(catchError(this.handleError));
  }

  public create(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('authorization', 'Bearer adasdasd');
    headers.set('Authorization', 'Bearer adasdasd');
    return this.http.post(this.URLProyectoLey, data, {headers: headers}).pipe(catchError(this.handleError));
  }
}
