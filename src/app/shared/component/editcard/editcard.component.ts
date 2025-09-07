import { Component, Inject, inject, INJECTOR, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PRIMARY_OUTLET, Router } from '@angular/router';
import { Icours } from '../../model/corses';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.scss']
})
export class EditcardComponent implements OnInit {
  matData ! : Icours

  courseForm ! : FormGroup
  private _router  = inject(Router)
  constructor(@Inject(MAT_DIALOG_DATA) private  course : Icours , private fb : FormBuilder ) {  
    this.matData = course
    console.log(this.matData);
    
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
        description : ["",Validators.required],
      longdescription : ["",Validators.required],
      iconurl : ["",Validators.required],
      category:  ["",Validators.required],


    })
  }
 

}
