import { Component, OnInit } from '@angular/core';
import { ProyectoLeyService } from '../../services/proyecto-ley.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { getIdUsuario } from 'src/app/shared/auth/storage/cabecera.storage';

@Component({
  selector: 'app-gestionar-proyecto-ley',
  templateUrl: './gestionar-proyecto-ley.component.html',
  styleUrls: ['./gestionar-proyecto-ley.component.scss']
})
export class GestionarProyectoLeyComponent implements OnInit {

  constructor(
    private _proyectoLeyService: ProyectoLeyService,
    private toastr: ToastrManager
  ) { }

  private request = {
    idUsuario: getIdUsuario(),
    estado: null
  }

  private proyectoLey = {
    nombre: 'Mi Proyecto de Ley',
    titulo: null,
    usuarioAud: 'eretamozo',
    idUsuario: getIdUsuario(),
    idCategoria: 1,
    objetoLey: null,
    fundamentoLey: null,
  }

  private flagRegistrar = false;
  private proyectoLeyList = [];

  ngOnInit() {
    this.getMisProyectosLey();
  }

  private getMisProyectosLey() {
    this._proyectoLeyService.getMisProyectosLey(this.request)
      .subscribe(data => {
        console.log(data);
        if (data) {
          if (data.codigo == 0) {
            this.toastr.warningToastr(data.message, "Warning!");
          } else {
            // this.toastr.successToastr(data.message, "Success!");
            this.proyectoLeyList = data.proyectosLey;
          }
        }
      },
        error => {
          console.log(error);
          this.toastr.errorToastr("Hubo un problema en el servidor", "Oops!");
        });
  }

  private nuevoPL(flg) {
    if (flg == 1) {
      this.flagRegistrar = true;
    } else {
      this.flagRegistrar = false;

      this.proyectoLey.titulo = null;
      this.proyectoLey.objetoLey = null;
      this.proyectoLey.fundamentoLey = null;

      this.getMisProyectosLey();
    }
  }

  private crearPL() {
    this._proyectoLeyService.create(this.proyectoLey)
      .subscribe(data => {
        console.log(data);
        if (data) {
          if (data.codigo == 0) {
            this.toastr.warningToastr(data.message, "Warning!");
          } else {
            this.toastr.successToastr(data.message, "Success!");
          }
        }
        this.nuevoPL(0);
      },
        error => {
          console.log(error);
          this.toastr.errorToastr("Hubo un problema en el servidor", "Oops!");
        });
  }

}
