import { Component, OnInit } from '@angular/core';
import { Icours } from '../../model/corses';
import { CoursesService } from '../../service/courses.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 courseArr ! : Array<Icours>
 
//  allcourses$ !: Observable<Array<Icours>>

 Begenerscourses ! : Icours[]
 Advancedcourses ! : Icours[];

 allcorses$ !:  Observable<Array<Icours>>
 Advancedcourse$ !:  Observable<Array<Icours>>
 Beginnercourse$ ! : Observable<Array<Icours>>

  constructor(private _cours : CoursesService) { }

  ngOnInit(): void {

 this.allcorses$ = this._cours.fetchAll()
 this.Beginnercourse$ = this.allcorses$
 .pipe(
  map(res=>{
   return res.filter(c=> c.category === 'Beginers')
   
  })
 )

 this.Advancedcourse$ = this.allcorses$
 .pipe(
  map(res2=>{
    return res2.filter(c=>c.category === 'Advanced')
    
  })
 )

   
    
   
    
  




  //  this._cours.fetchAll()
  //  .subscribe(res=>{
  //   this.Begenerscourses =  res.filter(ele=>ele.category ==='Beginers')
  //   this.Advancedcourses = res.filter(ele=>ele.category === 'Advanced' )
  //  })
   
  }

}
