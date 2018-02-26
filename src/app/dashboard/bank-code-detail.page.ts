import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {BankCode} from './bank-code.interface';
import {CommonService} from '../../services/common.service';
import {bankCodeSelector, DashboardModuleState} from './dashboard-reducers.module';
import {Store} from '@ngrx/store';
import {FindBankCodeByCodeAction} from './bank-code.action';

@Component({
  selector: 'qs-bank-code-detail',
  templateUrl: './bank-code-detail.page.html',
})
export class BankCodeDetailPage implements OnInit, OnDestroy {

  bankCode$: Observable<BankCode>;

  columns: any[] = [
    {name: 'referenceNo', label: 'Reference No'},
    {name: 'cost', label: 'Cost'},
  ];

  // constructor
  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<DashboardModuleState>) {
    this.bankCode$ = this.store.select(bankCodeSelector);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { code: string }) => {
      this.store.dispatch(new FindBankCodeByCodeAction({code: params.code}));
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
