import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private _dilogref : MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
  }
  Onconfirm( flag : boolean){
    this._dilogref.close(flag)

  }

}
