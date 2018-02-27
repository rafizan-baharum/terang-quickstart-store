import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {from} from 'rxjs/observable/from';
import {
  FIND_BANK_CODE_BY_CODE,
  FIND_BANK_CODES,
  FindBankCodeByCodeAction,
  FindBankCodeByCodeSuccessAction,
  FindBankCodesAction,
  FindBankCodesSuccessAction,
  REMOVE_BANK_CODE,
  RemoveBankCodeAction,
  RemoveBankCodeSuccessAction,
  SAVE_BANK_CODE,
  SaveBankCodeAction,
  SaveBankCodeSuccessAction,
  UPDATE_BANK_CODE,
  UpdateBankCodeAction,
  UpdateBankCodeSuccessAction
} from './bank-code.action';
import {CommonService} from '../../services/common.service';

@Injectable()
export class BankCodeEffects {

  constructor(private actions$: Actions,
              private commonService: CommonService) {
  }

  @Effect()
  public findBankCodes$: Observable<Action> = this.actions$
    .ofType(FIND_BANK_CODES)
    .map((action: FindBankCodesAction) => {
      console.log('effect: findBankCodes$');
      return action;
    })
    .switchMap((action) => this.commonService.findBankCodes())
    .map((bankCodes) => new FindBankCodesSuccessAction(bankCodes));

  @Effect()
  public findBankCodeByCode$: Observable<Action> = this.actions$
    .ofType(FIND_BANK_CODE_BY_CODE)
    .map((action: FindBankCodeByCodeAction) => action.payload)
    .switchMap((payload) => this.commonService.findBankCodeByCode(payload.code))
    .map((bankCode) => new FindBankCodeByCodeSuccessAction(bankCode));

  @Effect() saveBankCode$ = this.actions$
    .ofType(SAVE_BANK_CODE)
    .map((action: SaveBankCodeAction) => action.payload)
    .switchMap((bankCode) => this.commonService.saveBankCode(bankCode))
    .map((message) => new SaveBankCodeSuccessAction({message: 'success'}))
    .mergeMap((action) => from([action, new FindBankCodesAction()]));

  @Effect() updateBankCode$ = this.actions$
    .ofType(UPDATE_BANK_CODE)
    .map((action: UpdateBankCodeAction) => action.payload)
    .switchMap((bankCode) => this.commonService.updateBankCode(bankCode))
    .map((bankCode) => new UpdateBankCodeSuccessAction({message: 'success'}))
    .switchMap(() => this.commonService.findBankCodes())
    .map((bankCodes) => new FindBankCodesAction());

  @Effect() removeBankCode$ = this.actions$
    .ofType(REMOVE_BANK_CODE)
    .map((action: RemoveBankCodeAction) => action.payload)
    .switchMap((payload) => this.commonService.removeBankCode(payload))
    .map((message) => new RemoveBankCodeSuccessAction({message: 'success'}))
    .mergeMap((action) => from([action, new FindBankCodesAction()]));
}
