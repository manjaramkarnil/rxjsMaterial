import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, share, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icours, IcousRespons } from '../model/corses';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 COURSE_URL : string = `${environment.basuUrl}/courses.json`

  constructor(private _http : HttpClient) { }

  Addcourse(obj : Icours):Observable<{name : string}>{   
    return this._http.post<any>(this.COURSE_URL,obj)
  }

  fetchAll() : Observable<Array<Icours>>{
    return this._http.get<Icours>(this.COURSE_URL)
    .pipe(
      map((obj: any)=>{
        shareReplay()
        let courseArr = []
        for (const key in obj) {
          courseArr.push({...obj[key],id:key})
        
        }
        return courseArr

      })
    )

  }

  UpdateCourese(obj : Icours):Observable<Icours>{
    let updateUrl = `${environment.basuUrl}/courses/${obj.id}.json`
    return this._http.patch<Icours>(updateUrl,obj)
  }


  removCourse(id :number):Observable<Icours>{
    let removeUrl  = `${environment.basuUrl}/courses ${id}.json`;
    return this._http.delete<Icours>(removeUrl)


    

  }

  
}
