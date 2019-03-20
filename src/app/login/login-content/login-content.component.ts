import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

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
    this._loginService.login(this.request)
      .subscribe(data => {
        console.log(data);
        if (data.codigo == 0) {
          this.toastr.warningToastr(data.message, "Warning!");
        } else {
          this.toastr.successToastr(data.message, "Success!");
          //Agregar al localStorage
          this.router.navigate(['principal']);
        }
      },
        error => {
          console.log(error);
          this.toastr.errorToastr("Hubo un problema en el servidor", "Oops!");
        });
  }

}
