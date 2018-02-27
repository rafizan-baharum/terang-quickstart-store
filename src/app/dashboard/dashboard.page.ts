import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CommonService} from '../../services/common.service';
import {BankCode} from './bank-code.interface';
import {bankCodesSelector, DashboardModuleState} from './dashboard-reducers.module';
import {Store} from '@ngrx/store';
import {FindBankCodesAction} from './bank-code.action';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {

  bankCodes$: Observable<BankCode[]>;

  // constructor
  constructor(private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private store: Store<DashboardModuleState>) {
    // the old way
    // this.bankCodes$ = this.commonService.findBankCodes();
    this.bankCodes$ = this.store.select(bankCodesSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(new FindBankCodesAction());
  }

  ngOnDestroy(): void {
    // no op
  }

  viewBankCode(bankCode: BankCode): void {
    this.router.navigate(['/detail', bankCode.code]);
  }

  showAddDialog(): void {
    // console.log('showContainerDialog');
    // let config: MatDialogConfig = new MatDialogConfig();
    // config.viewContainerRef = this.vcf;
    // config.role = 'dialog';
    // config.width = '70%';
    // config.height = '60%';
    // config.position = {top: '0px'};
    // this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    // this.creatorDialogRef.afterClosed().subscribe((res) => {
    //   console.log('close dialog');
    // });
  }
}
