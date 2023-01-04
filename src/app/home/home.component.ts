import { Component } from '@angular/core';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private backendservice:BackEndServiceService){}

  CourseName:any[]=[]
  selectedCourse:any
  FutureCourses:any[]=[]

  ngOnInit(){
    this.GetCourseName();
  }

  GetCourseName(){
    this.backendservice.GetCourseName().subscribe((res)=>{
      this.CourseName=res;
      console.log(res);
    })
  }

  submitSelectedCourse (event: any) {
    this.selectedCourse = event.target.value;
    this.backendservice.GetSortCourse(this.selectedCourse).subscribe((result)=>{
      this.FutureCourses=result;
      console.log(result);
    })
  }
}
