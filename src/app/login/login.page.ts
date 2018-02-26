import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { IdentityService } from '../../services/identity.service';

@Component({
  selector: 'dm-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  redirectUrl: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private identityService: IdentityService) {
    this.redirectUrl = this.route.snapshot.queryParams['redirectTo'];
  }

  ngOnInit(): void {
    console.log('login page ngOnInit');
    // this.identityService.logout();
  }

  login(): void {
    this.authenticationService.login(this.username, this.password)
      .subscribe(
        (result) => {
          if (result) {
            this.identityService.login(result);

            // tarik permission matrix kat sini
            // pakai promise

            this.navigateAfterSuccess();
          } else {
            console.log('no error');
          }
        },
        (error) => {
          // no op
          console.log('error:' + error);
        },
      );
  }

  navigateAfterSuccess(): void {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/']);
    }
  }
}
