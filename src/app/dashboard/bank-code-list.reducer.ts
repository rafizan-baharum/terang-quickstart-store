import {FIND_BANK_CODES_SUCCESS, FindBankCodesSuccessAction} from './bank-code.action';
import {BankCode} from './bank-code.interface';

export interface BankCodeListState {
  bankCodes?: BankCode[];
}

const initialState: BankCodeListState = {
  bankCodes: [],
};

export function bankCodeListReducer(state = initialState, action: FindBankCodesSuccessAction): BankCodeListState {
  switch (action.type) {
    case FIND_BANK_CODES_SUCCESS:
      console.log('reducer: FIND_BANK_CODES_SUCCESS');
      return {
        bankCodes: action.payload,
      };
    default: {
      return state;
    }
  }
}

export const getBankCodes = (state: BankCodeListState) => state.bankCodes;
