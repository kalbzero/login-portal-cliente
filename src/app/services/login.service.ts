import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<User>{
    const url = environment.baseUrl + 'login';
    const header = new HttpHeaders().set('Content-Type', 'application/json');

    const body = 'email=' + user.email +
                  '&password=' + user.password;
    return this.http.post<User>(url, body, {headers: header});
  }

  recoverPassword(user: User): Observable<User> {
    const url = environment.baseUrl + 'recover';
    const header = new HttpHeaders().set('Content-Type', 'application/json');

    const body = 'email=' + user.email;

    return this.http.post<User>(url, body, {headers: header});
  }
}
