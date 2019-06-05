import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { removeSession } from 'src/app/shared/auth/storage/token.storage';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private _router: Router) { }

  private opened: boolean;

  ngOnInit() {
  }

  private cerrarSesion(){
    removeSession();
    this._router.navigate(['/login']);
  }

  goToModulo(modulo: any) {
    console.log(modulo);
    // Object.keys(this.activo).forEach(key => this.activo[key] = 'titulo');
    // this.activo[modulo] = 'tituloActivo';
    // let _params: NavigationExtras = { queryParams: { val: true } }
    // this._router.navigate(['/principal/' + modulo], _params).then(() => {
    //habilita el menu cuando recien carga el modulo
    // this.isDisabledMenu = false;
    // this.isDisabledback = false;
    // this.namModulo = this.jsonUris[modulo];
    this._router.navigate(['/principal/' + modulo]).then(() => {
    });
  }

}
