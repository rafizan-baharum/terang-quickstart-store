import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BankCode} from './bank-code.interface';

@Component({
  selector: 'qs-bank-code-list',
  templateUrl: './bank-code-list.component.html',
})
export class BankCodeListComponent {
  @Input()
  bankCodes: BankCode[];

  @Output()
  view: EventEmitter<BankCode> = new EventEmitter<BankCode>();

  constructor() {
    // no op
  }

  select(bankCode: BankCode): void {
    this.view.emit(bankCode);
  }
}
