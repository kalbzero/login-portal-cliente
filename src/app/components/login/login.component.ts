import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showTwoWays: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.router.navigateByUrl('forgotPassword');
  }

  register() {
    this.router.navigateByUrl('register');
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (response) => { this.showTwoWays = true; console.log(response); },
        (error) => { console.log(error); }
      );
    }
  }
}
