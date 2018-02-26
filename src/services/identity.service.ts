import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import {AuthHttp, JwtHelper} from 'angular2-jwt';
import {AUTH_USER, TOKEN_NAME} from './auth.constant';

@Injectable()
export class IdentityService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;

  private IDENTITY_API: string = environment.endpoint + '/api/identity';

  constructor(private http: AuthHttp) {
    // no op
  }

  login(accessToken: string): void {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log('decoded token: ' + decodedToken);

    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout(): void {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(AUTH_USER);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
}
