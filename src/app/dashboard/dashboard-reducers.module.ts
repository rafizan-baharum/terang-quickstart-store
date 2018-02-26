import {createFeatureSelector, createSelector} from '@ngrx/store';
import {bankCodeListReducer, BankCodeListState, getBankCodes} from './bank-code-list.reducer';
import {bankCodeReducer, BankCodeState, getBankCode} from './bank-code.reducer';

export interface DashboardModuleState {
  bankCodes: BankCodeListState;
  bankCode: BankCodeState;
}

export const dashboardModuleReducers = {
    bankCodes: bankCodeListReducer,
    bankCode: bankCodeReducer,
  }
;

// root
export const rootSelector = createFeatureSelector<DashboardModuleState>('dashboardModuleState');
export const rootBankCodesStateSelector = (state: DashboardModuleState) => state.bankCodes;
export const rootBankCodeStateSelector = (state: DashboardModuleState) => state.bankCode;

// bank code
export const bankCodesStateSelector = createSelector(rootSelector, rootBankCodesStateSelector);
export const bankCodeStateSelector = createSelector(rootSelector, rootBankCodeStateSelector);
export const bankCodesSelector = createSelector(bankCodesStateSelector, getBankCodes);
export const bankCodeSelector = createSelector(bankCodeStateSelector, getBankCode);
