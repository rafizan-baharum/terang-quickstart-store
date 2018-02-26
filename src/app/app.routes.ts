import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AuthGuard} from './guards/auth.guard';
import {LoginPage} from './login/login.page';
import {BankCodeDetailPage} from './dashboard/bank-code-detail.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
        canActivate: [AuthGuard],
      },
      {
        path: 'detail/:code',
        component: BankCodeDetailPage ,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
