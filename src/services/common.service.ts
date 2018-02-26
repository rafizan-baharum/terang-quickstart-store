import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {BankCode} from '../app/dashboard/bank-code.interface';

@Injectable()
export class CommonService {

  constructor(private http: AuthHttp) {
    // no op
  }

  findBankCodes(): Observable<BankCode[]> {
    return this.http.get(environment.endpoint + '/api/common/bankCodes')
      .map((res: Response) => <BankCode[]>res.json());
  }

  findBankCodeByCode(code: string): Observable<BankCode> {
    return this.http.get(environment.endpoint + '/api/common/bankCodes/' + code)
      .map((res: Response) => <BankCode>res.json());
  }

  saveBankCode(bankCode: BankCode): Observable<String> {
    return this.http.post(environment.endpoint + '/api/common/bankCodes', JSON.stringify(bankCode))
      .map((res: Response) => <String>res.text());
  }

  updateBankCode(bankCode: BankCode): Observable<String> {
    return this.http.put(environment.endpoint + '/api/common/bankCodes' + bankCode.code, JSON.stringify(bankCode))
      .map((res: Response) => <String>res.text());
  }

  removeBankCode(bankCode: BankCode): Observable<String> {
    return this.http.delete(environment.endpoint + '/api/common/bankCodes' + bankCode.code, JSON.stringify(bankCode))
      .map((res: Response) => <String>res.text());
  }
}
