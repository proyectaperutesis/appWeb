import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { getNombreUsuario, getIdUsuario } from './shared/auth/storage/cabecera.storage';
import { getToken } from './shared/auth/storage/toke.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  
  constructor(private _router: Router){
    
    if(getNombreUsuario() == null && getIdUsuario() == null && getToken() == null){
      this._router.navigate(['login']);
    }else{
      this._router.navigate(['principal']);
    }
  }
}
