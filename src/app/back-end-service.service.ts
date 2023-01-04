import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  constructor(private http: HttpClient) {
  }
  GetWeatherData() {
    return this.http.get<any>('https://localhost:7051/WeatherForecast')
  }

  //inserting course details
  InsertCourseData(data: any) {
    //this.http.post('https://localhost:7072/api/Course/insertcourse',data).toPromise()
    this.http.post('https://localhost:7051/api/Course/insertcourse', data).toPromise().then(result => {
      console.log(result);
      alert("Added Successfully");
      location.reload();
    })
  }

  //view course
  GetCourseData() {
    return this.http.get<any>('https://localhost:7051/api/Course/viewcourse')
  }
  InsertfutureCourseData(data: any) {
    this.http.post('https://localhost:7051/api/Course/insertfuturecourse', data).toPromise().then(result => { 
      console.log(result);
      alert("Added Successfully");
      location.reload();
    })
  }

  GetSortCourse(data:any){
    return this.http.get<any>('https://localhost:7051/api/Users/displayfuturecourse/'+data)
  }

  GetFutureCourse(){
    return this.http.get<any>('https://localhost:7051/api/Course/getfuturecourse')
  }

  AddColleges(data:any){
    this.http.post('https://localhost:7051/api/College/addcolleges', data).toPromise().then( res =>{
      console.log(res);
      alert("Added Successfully");
      location.reload();
    })
  }
  InsertCollegeData(data: any) {
    this.http.post('https://localhost:7051/api/College/insertcollege', data).toPromise().then(result => { console.log(result); })
  }

  //users side
  GetCourseName() {
    return this.http.get<any>('https://localhost:7051/api/Users/getcoursename')
  }

  ViewColleges(coursename:any){
    return this.http.get<any>('https://localhost:7051/api/Users/viewcolleges/'+coursename)
  }
}
