import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from './auth.constant';
import {environment} from '../environments/environment';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = '/oauth/token';

  constructor(private http: Http) {
  }

  login(username: string, password: string): any {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

    console.log(environment.endpoint + AuthenticationService.AUTH_TOKEN);

    // post login request
    return this.http.post(environment.endpoint + AuthenticationService.AUTH_TOKEN, body, {headers})
      .map(res => res.json())
      .map((res: any) => {
        if (res.access_token) {
          return res.access_token;
        }
        console.log('res; ' + res);
        return null;
      });
  }
}
