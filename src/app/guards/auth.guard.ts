import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {TOKEN_NAME} from '../../services/auth.constant';
import {IdentityService} from '../../services/identity.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private identityService: IdentityService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (tokenNotExpired(TOKEN_NAME, this.identityService.accessToken)) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
      return false;
    }
  }
}
