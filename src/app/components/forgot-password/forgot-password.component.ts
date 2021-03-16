import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  showMsg: boolean = false;
  msg: string = '';

  recoverForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  recoverPassword() {
    if(this.recoverForm.valid) {
      this.loginService.recoverPassword(this.recoverForm.value).subscribe(
        (response) => {
          console.log(response);
          this.showMsg = true;
          this.msg = 'Verifique o seu Login';
        },
        (error) => {
          console.log(error);
          this.showMsg = true;
          if(error.status == 404) this.msg = 'Error 404 - Servidor não encontrado, verifique sua conexão com a internet!';
        }
      );
    }
  }
}
