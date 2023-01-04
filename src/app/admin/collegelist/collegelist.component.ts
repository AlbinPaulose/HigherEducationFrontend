import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.scss']
})
export class CollegelistComponent {
  constructor(private backendservice:BackEndServiceService,private fb:FormBuilder){}

  FutureCourses:any[]=[]

  ngOnInit(){
    this.getFutureCourses();
  }

  getFutureCourses(){
    this.backendservice.GetFutureCourse().subscribe((result)=>{
      this.FutureCourses = result;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }

  CollegeRegisterForm=this.fb.group({
    CourseName:[''],
    CollegeName:[''],
    SeatsAvailable:[''],
    University:[''],
    District:[''],
    Address:['']
  })

  SelectedCourse(event:any){
    this.CollegeRegisterForm.patchValue({
      CourseName:event.target.value
    })
  }

  OnSubmit(){
    console.log(this.CollegeRegisterForm.value);
    this.backendservice.AddColleges(this.CollegeRegisterForm.value);
  }
}
