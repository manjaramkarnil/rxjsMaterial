import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { Icours } from '../../model/corses';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { count } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../service/courses.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-matform',
  templateUrl: './matform.component.html',
  styleUrls: ['./matform.component.scss']
})
export class MatformComponent implements OnInit {
  courseData ! : Icours;
  courseform ! : FormGroup

 private _course = inject(CoursesService)

  constructor(@Inject(MAT_DIALOG_DATA) private cours : Icours, private fb : FormBuilder , private _matdilog : MatDialogRef<ConfirmComponent>)  
  {  
    this.createForm()
    
    console.log(cours)
    this.courseData = cours;
    this.courseform.patchValue(cours)
   }

  ngOnInit(): void {
  }

  get f(){
    return this.courseform.controls
  }

  createForm(){
   this.courseform = this.fb.group({
     title : ["",Validators.required],
  description : ["",Validators.required],
  image :       ["",Validators.required],
  category :    ["",Validators.required],
  duration :    ["",Validators.required],



   })
  }
 Onform(){
  if(this.courseform.valid){
    let val = {...this.courseform.value,id: this.courseData.id}
    this._course.UpdateCourese(val)  
  }
  
 }
SaveClose(){
  

 }


}
