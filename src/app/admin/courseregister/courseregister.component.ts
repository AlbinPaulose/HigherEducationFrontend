import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courseregister',
  templateUrl: './courseregister.component.html',
  styleUrls: ['./courseregister.component.scss']
})
export class CourseregisterComponent implements OnInit {
  constructor(private fb:FormBuilder,private backendservice:BackEndServiceService,private route:ActivatedRoute){}
  CourseDetails:any[]=[]
  sub:any;
  courseid:any;
  CourseRegisterForm = this.fb.group({
    CourseName:[''],
    CourseType:['']
  })
  OnSubmit(){
    console.log(this.CourseRegisterForm.value)
    this.backendservice.InsertCourseData(this.CourseRegisterForm.value)
   
  }
  ngOnInit() {
    this.getCourses();
    
  }

  getCourses(){
    this.backendservice.GetCourseData().subscribe((result) => {
      this.CourseDetails = result;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    });

  }

  deleteCourse(){
    this.sub = this.route.paramMap.subscribe((params)=>{
      this.courseid = params.get('courseid');
      if(confirm('Are you sure?')){
        this.backendservice.DeleteCousre(this.courseid)
        //location.reload();
      }
    })
  }

}
