import {FIND_BANK_CODE_BY_CODE_SUCCESS, FindBankCodeByCodeSuccessAction} from './bank-code.action';
import {BankCode} from './bank-code.interface';

export interface BankCodeState {
  bankCode?: BankCode;
}

const initialState: BankCodeState = {
  bankCode: <BankCode>{},
};

export function bankCodeReducer(state = initialState, action: FindBankCodeByCodeSuccessAction): BankCodeState {
  switch (action.type) {
    case FIND_BANK_CODE_BY_CODE_SUCCESS:
      return {
        bankCode: action.payload,
      };
    default: {
      return state;
    }
  }
}

export const getBankCode = (state: BankCodeState) => state.bankCode;
