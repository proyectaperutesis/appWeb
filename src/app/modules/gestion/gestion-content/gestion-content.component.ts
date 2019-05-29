import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-content',
  templateUrl: './gestion-content.component.html',
  styleUrls: ['./gestion-content.component.scss']
})
export class GestionContentComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToModulo(modulo) {
    // Object.keys(this.activo).forEach(key => this.activo[key] = 'links');
    // this.activo[modulo] = 'activeLinks';
    this._router.navigate(['/principal/gestion/' + modulo]);
  }

}
