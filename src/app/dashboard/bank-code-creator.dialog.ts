import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {BankCode} from './bank-code.interface';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'qs-bank-code-creator',
  templateUrl: './bank-code-creator.dialog.html',
})
export class BankCodeCreatorDialog implements OnInit {

  editorForm: FormGroup;

  // constructor
  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private dialog: MatDialogRef<BankCodeCreatorDialog>) {
  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      code: ['', Validators.required],
      description: ['', [(Validators.required)]],
    });
  }

  save(bankCode: BankCode): void {
    console.log(JSON.stringify(bankCode));
    this.dialog.close();
  }
}
