import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { removeSession, saveToken } from 'src/app/shared/auth/storage/token.storage';
import { saveIdUsuario, saveIdRol, savePersona, saveNombreUsuario } from 'src/app/shared/auth/storage/cabecera.storage';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {

  constructor(
    private _loginService: LoginService,
    private toastr: ToastrManager,
    private router: Router
  ) { }

  private request = { username: null, password: null };

  ngOnInit() {
  }

  public login() {
    removeSession();
    this._loginService.login(this.request)
      .subscribe(data => {
        if (data.codigo == 0) {
          this.toastr.warningToastr(data.message, "Warning!");
        } else {
          this.toastr.successToastr(data.message, "Success!");
          //Agregar al localStorage
          saveToken(data.token);
          saveIdUsuario(data.payload.idUsuario);
          saveIdRol(data.payload.idRol);
          savePersona(data.payload.persona);
          saveNombreUsuario(data.payload.username);
          this.router.navigate(['principal']);
        }
      },
        error => {
          console.log(error);
          this.toastr.errorToastr("Hubo un problema en el servidor", "Oops!");
        });
  }

}
