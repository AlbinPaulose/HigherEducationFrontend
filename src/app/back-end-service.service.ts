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

  //view course data
  GetCourseData() {
    return this.http.get<any>('https://localhost:7051/api/Course/viewcourse')
  }

  //delete course
  DeleteCousre(courseId:number){
    return this.http.delete<number>('https://localhost:7051/api/Course/deletecourse/'+courseId).toPromise().then(result=>{
      alert("Deleted Successfully");
      location.reload();
      window.location.href="courseregister";
    })
  }

  //get course details based on id for editing
  GetCourseById(courseid:number){
    return this.http.get<any>('https://localhost:7051/api/Course/getcoursebyid/'+courseid)
  }

  //update course
  UpdateCourse(data:any){
     this.http.post('https://localhost:7051/api/Course/updatecourse',data).toPromise().then(result=>{
      console.log(result);
      alert("Edited Successfully");
      window.location.href="courseregister";
     })
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

  //delete future course
  async DeleteFutureCourse(futurecourseId:number){
    const result = await this.http.delete<number>('https://localhost:7051/api/Course/deletefuturecourse/' + futurecourseId).toPromise();
    alert("Deleted Successfully");
    location.reload();
    window.location.href="futurecourse";
  }

  //get future course based on id to edit
  GetFutureCourseById(futurecourseid:number){
    return this.http.get<any>('https://localhost:7051/api/Course/getfuturecoursebyid/'+futurecourseid)
  }

  //update future course
  UpdateFutureCourse(data:any){
    this.http.post('https://localhost:7051/api/Course/updatefuturecourse',data).toPromise().then(result=>{
     console.log(result);
     alert("Edited Successfully");
     window.location.href="futurecourse";
    })
 }

  AddColleges(data:any){
    this.http.post('https://localhost:7051/api/College/addcolleges', data).toPromise().then( res =>{
      console.log(res);
      alert("Added Successfully");
      location.reload();
    })
  }

  ViewAllCollegeDetails(){
    return this.http.get<any>('https://localhost:7051/api/College/viewallcolleges')
  }

  InsertCollegeData(data: any) {
    this.http.post('https://localhost:7051/api/College/insertcollege', data).toPromise().then(result => { console.log(result); })
  }

  //delete college
  async DeleteCollege(collegeId:number){
    const result = await this.http.delete<number>('https://localhost:7051/api/College/deletecollege/' + collegeId).toPromise();
    alert("Deleted Successfully");
    location.reload();
    window.location.href="addcollege";
  }

  //get college details based on id to edit
  GetCollegeById(collegeId:number){
    return this.http.get<any>('https://localhost:7051/api/College/getcollegebyid/'+collegeId)
  }

  //update college
  UpdateCollege(data:any){
    this.http.post('https://localhost:7051/api/College/updatecollege',data).toPromise().then(result=>{
     console.log(result);
     alert("Edited Successfully");
     window.location.href="addcollege";
    })
 }

 //Listing the details based on the selecting filtering types of colleges
 FilterCollegeType(type:any){
  return this.http.get<any>('https://localhost:7051/api/College/filtercollegesTypesOn/'+type)
 }

 //Get colleges list based on selected filter
 FilterCollegesBy(sortby:any){
  return this.http.get<any>('https://localhost:7051/api/College/filterCollegesOn/'+sortby)
 }

  //users side
  GetCourseName() {
    return this.http.get<any>('https://localhost:7051/api/Users/getcoursename')
  }

  ViewColleges(coursename:any){
    return this.http.get<any>('https://localhost:7051/api/Users/viewcolleges/'+coursename)
  }

  FilterUsersCollegesBy(coursename:any,sortby:any){
    //console.log(coursename,"sortby",sortby)
    return this.http.get<any>('https://localhost:7051/api/Users/filterCollegesCourseOn/'+coursename+'/'+sortby)
  }



}
