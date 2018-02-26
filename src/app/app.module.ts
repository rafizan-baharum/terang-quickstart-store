import {NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {MainLayout} from './main/main.layout';
import {DashboardPage} from './dashboard/dashboard.page';
import {AuthGuard} from './guards/auth.guard';
import {TOKEN_NAME} from '../services/auth.constant';
import {Http} from '@angular/http';
import {RequestInterceptor} from '../config/interceptors/request.interceptor';
import {CovalentHttpModule} from '@covalent/http';
import {CommonService} from '../services/common.service';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {BankCodeDetailPage} from './dashboard/bank-code-detail.page';
import {BankCodeCreatorDialog} from './dashboard/bank-code-creator.dialog';
import {LoginPage} from './login/login.page';
import {IdentityService} from '../services/identity.service';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {BankCodeListComponent} from './dashboard/bank-code-list.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DashboardModule} from './dashboard/dashboard.module';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    BankCodeDetailPage,
    BankCodeCreatorDialog,
    BankCodeListComponent,
    MainLayout,
    LoginPage,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    SharedModule,
    DashboardModule,
    HttpClientModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    CommonService,
    IdentityService,
    AuthenticationService,
    AuthGuard,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
