import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../service/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  courseForm ! : FormGroup
  private _router = inject(Router)
  constructor(private _corse : CoursesService) { }

  ngOnInit(): void {
 this.createform()
  }
  createform(){
       this.courseForm = new FormGroup({
      title : new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required]),
      image : new FormControl(null,[Validators.required]),
      category : new FormControl (null,[Validators.required]),
      duration : new FormControl(null,[Validators.required]),
      rating : new FormControl(null,[Validators.required]),
      auther : new FormControl (null,[Validators.required])

    })
  }

  Onform(){
    if(this.courseForm.valid){
      let val = this.courseForm.value
      console.log(val);
      this._corse.Addcourse(val)
      .subscribe({
        next : data =>{
        console.log(data);
        this.courseForm.reset()
        this._router.navigate([''])
        
        },error : err =>{
          console.log(err);
          
        }
      })

      
    }

  }

}
