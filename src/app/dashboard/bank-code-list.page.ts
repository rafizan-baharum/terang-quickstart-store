import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {BankCode} from './bank-code.interface';
import {CommonService} from '../../services/common.service';
import {bankCodesSelector, DashboardModuleState} from './dashboard-reducers.module';
import {Store} from '@ngrx/store';
import {FindBankCodesAction} from './bank-code.action';
import {BankCodeCreatorDialog} from './bank-code-creator.dialog';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';

@Component({
  selector: 'qs-bank-code-list',
  templateUrl: './bank-code-list.page.html',
})
export class BankCodeListPage implements OnInit {

  banks$: Observable<BankCode[]>;
  @Output() view = new EventEmitter<BankCode>();

  columns: any[] = [
    {name: 'code', label: 'Code'},
    {name: 'ibgCode', label: 'IBG'},
    {name: 'swiftCode', label: 'SWIFT'},
    {name: 'description', label: 'Description'},
    {name: 'action', label: 'Action'},
  ];

  constructor(private commonService: CommonService,
              private snackBar: MatSnackBar,
              private router: Router,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private store: Store<DashboardModuleState>) {
    this.banks$ = this.store.select(bankCodesSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(new FindBankCodesAction());
  }

  viewBank(bank: BankCode): void {
    this.router.navigate(['/administration/bank-codes/', bank.code]);
  }

  createDialog() {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '100%';
    config.height = '60%';
    config.position = {top: '0px'};
    const editorDialogRef = this.dialog.open(BankCodeCreatorDialog, config);
    editorDialogRef.afterClosed().subscribe((res) => {
      // done
    });
  }
}
