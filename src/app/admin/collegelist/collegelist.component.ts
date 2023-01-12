import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.scss']
})
export class CollegelistComponent {
  constructor(private backendservice:BackEndServiceService,private fb:FormBuilder,private route:ActivatedRoute){}

  CollegeDetails:any[]=[]
  FutureCourses:any[]=[]
  sub:any
  CollegeId:any
  selectedFilterType:any
  filterDisplayLabel:any
  filterTypeResult:any[]=[]
  filteredOn:any

  ngOnInit(){
    this.getFutureCourses();
    this.getCollegeDetails();
  }

  getFutureCourses(){
    this.backendservice.GetFutureCourse().subscribe((result)=>{
      this.FutureCourses = result;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }

  getCollegeDetails(){
    this.backendservice.ViewAllCollegeDetails().subscribe((result)=>{
      this.CollegeDetails = result;
    },
    (err:HttpErrorResponse)=>{
      alert(err.message);
    })
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

  deleteCollege(){
    this.sub = this.route.paramMap.subscribe((params)=>{
      this.CollegeId = params.get('collegeid');
      console.log(this.CollegeId);
      if(confirm('Are you sure?')){
        this.backendservice.DeleteCollege(this.CollegeId)
      }
    })
  }

  OnSubmit(): void{
    console.log(this.CollegeRegisterForm.value);
    this.backendservice.AddColleges(this.CollegeRegisterForm.value);
  }


  GetSelectedFilteredType(event:any){
    this.selectedFilterType = event.target.value;
    if(this.selectedFilterType=="CourseName"){
      this.filterDisplayLabel="Course";
    }
    else if(this.selectedFilterType=="University"){
      this.filterDisplayLabel="University"
    }
    else if(this.selectedFilterType=="District"){
      this.filterDisplayLabel="District"
    }
    this.backendservice.FilterCollegeType(this.selectedFilterType).subscribe((result)=>{
      this.filterTypeResult=result;
    })
    
  }

  GetFilteredColleges(event:any){
    this.filteredOn=event.target.value;
    console.log(this.filteredOn);
    this.backendservice.FilterCollegesBy(this.filteredOn).subscribe((result)=>{
      this.CollegeDetails = result;
    })
  }
}
