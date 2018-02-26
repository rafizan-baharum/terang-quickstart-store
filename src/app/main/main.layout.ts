import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IdentityService} from '../../services/identity.service';

@Component({
  selector: 'qs-main',
  templateUrl: './main.layout.html',
})

export class MainLayout implements OnInit {

  routes: Object[] = [
    {
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    },
  ];

  constructor(private identityService: IdentityService,
              private router: Router) {
  }

  ngOnInit(): void {
    // no op
  }


  logout(): void {
    this.identityService.logout();
    this.router.navigate(['/login']);
  }

}
