import {Action} from '@ngrx/store';
import {BankCode} from './bank-code.interface';

export const FIND_BANK_CODES = '[BankCode] Find Bank Codes';
export const FIND_BANK_CODES_SUCCESS = '[BankCode] Find Bank Codes Success';
export const FIND_BANK_CODES_ERROR = '[BankCode] Find Bank Codes Error';
export const FIND_BANK_CODE_BY_CODE = '[BankCode] Find Bank Code By Code';
export const FIND_BANK_CODE_BY_CODE_SUCCESS = '[BankCode] Find Bank Code By Code Success';
export const FIND_BANK_CODE_BY_CODE_ERROR = '[BankCode] Find Bank Code By Code Error';
export const SAVE_BANK_CODE = '[BankCode] Save Bank Code';
export const SAVE_BANK_CODE_SUCCESS = '[BankCode] Save Bank Code Success';
export const SAVE_BANK_CODE_ERROR = '[BankCode] Save Bank Code Error';
export const UPDATE_BANK_CODE = '[BankCode] Update Bank Code';
export const UPDATE_BANK_CODE_SUCCESS = '[BankCode] Update Bank Code Success';
export const UPDATE_BANK_CODE_ERROR = '[BankCode] Update Bank Code Error';
export const REMOVE_BANK_CODE = '[BankCode] Remove Bank Code';
export const REMOVE_BANK_CODE_SUCCESS = '[BankCode] Remove Bank Code Success';
export const REMOVE_BANK_CODE_ERROR = '[BankCode] Remove Bank Code Error';

export class FindBankCodesAction implements Action {
  readonly type: string = FIND_BANK_CODES;

  constructor() {
    console.log('FindBankCodesAction');
  }
}

export class FindBankCodesSuccessAction implements Action {
  readonly type: string = FIND_BANK_CODES_SUCCESS;

  constructor(public payload: BankCode[]) {
    console.log('FindBankCodesSuccessAction');
  }
}

export class FindBankCodeByCodeAction implements Action {
  readonly type: string = FIND_BANK_CODE_BY_CODE;

  constructor(public payload: { code: string }) {
  }
}

export class FindBankCodeByCodeSuccessAction implements Action {
  readonly type: string = FIND_BANK_CODE_BY_CODE_SUCCESS;

  constructor(public payload: BankCode) {
  }
}

export class SaveBankCodeAction implements Action {
  readonly type: string = SAVE_BANK_CODE;

  constructor(public payload: BankCode) {
  }
}

export class SaveBankCodeSuccessAction implements Action {
  readonly type: string = SAVE_BANK_CODE_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}

export class UpdateBankCodeAction implements Action {
  readonly type: string = UPDATE_BANK_CODE;

  constructor(public payload: BankCode) {
  }
}

export class UpdateBankCodeSuccessAction implements Action {
  readonly type: string = UPDATE_BANK_CODE_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}

export class RemoveBankCodeAction implements Action {
  readonly type: string = REMOVE_BANK_CODE;

  constructor(public payload: BankCode) {
  }
}

export class RemoveBankCodeSuccessAction implements Action {
  readonly type: string = REMOVE_BANK_CODE_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}
