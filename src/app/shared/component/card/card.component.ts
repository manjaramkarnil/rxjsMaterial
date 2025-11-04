import { Component, inject, Input, OnInit } from '@angular/core';
import { Icours } from '../../model/corses';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { EditcardComponent } from '../editcard/editcard.component';
import { CoursesService } from '../../service/courses.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Router } from '@angular/router';
import { MatformComponent } from '../matform/matform.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() getcard ! :Icours;



 private _router = inject(Router)
  constructor(private _matdilog : MatDialog , private _courseServ : CoursesService) { }

  ngOnInit(): void {
  }
//   Onview(){
//  let matconfig = new MatDialogConfig()
//    matconfig.data = this.getcard
//    matconfig.width = '800px'
//    matconfig.height = '500px'
//    matconfig.disableClose = false

//    const dilogref = this._matdilog.open(FormComponent,matconfig)
   

//   }
Onview(){
  let matconfig = new MatDialogConfig()
  matconfig.data = this.getcard
  matconfig.width = '700px'
  matconfig.height = '400px'
  const matdilogref = this._matdilog.open(EditcardComponent,matconfig)
  matdilogref.afterClosed()
  .subscribe(res=>{
    console.log(`${this.getcard}`)

  })


}


Onform(){
  let MatDialogConfig2 = new MatDialogConfig()
  MatDialogConfig2.data = this.getcard;
  MatDialogConfig2.width = '600px';
  MatDialogConfig2.height = '500px';
  MatDialogConfig2.disableClose = false
  const matdilogref = this._matdilog.open(MatformComponent,MatDialogConfig2)

  matdilogref.afterClosed()
  .subscribe(res=>{
    console.log(`${this.getcard}`)

  })
  
}

Onremove(id : number){

  let dilogconfic  = this._matdilog.open(ConfirmComponent)
  dilogconfic.afterClosed()
  .subscribe(flag=>{
    if(flag){
      this._courseServ.removCourse(id)
  .subscribe(res=>{
    console.log(res);
    this._router.navigate([''])
    
  })

    }
  })

  



}


}
