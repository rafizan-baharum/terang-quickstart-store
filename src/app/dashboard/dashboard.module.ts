import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {dashboardModuleReducers} from './dashboard-reducers.module';
import {BankCodeEffects} from './bank-code.effect';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('dashboardModuleState', dashboardModuleReducers),
    EffectsModule.forFeature([
      BankCodeEffects,
    ]),

  ],
  declarations: [],
  exports: [],
})
export class DashboardModule {
}
