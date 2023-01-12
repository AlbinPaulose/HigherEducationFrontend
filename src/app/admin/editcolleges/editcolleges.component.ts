import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-editcolleges',
  templateUrl: './editcolleges.component.html',
  styleUrls: ['./editcolleges.component.scss']
})
export class EditcollegesComponent {
  collegeId:any
  EditCollegeForm:FormGroup
  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private fb:FormBuilder){
    this.route.paramMap.subscribe((params:ParamMap): void=>{
      this.collegeId=params.get('collegeid');
    })
    this.EditCollegeForm = this.fb.group({
      CollegeId:[''],
      CourseName:[''],
      CollegeName:[''],
      SeatsAvailable:[''],
      University:[''],
      District:[''],
      Address:['']
    })
  }

  ngOnInit(){
    this.getCollegeDetails();
  }


  getCollegeDetails(){
    this.backendservice.GetCollegeById(this.collegeId).subscribe((result:any)=>{
      console.log('res',result)
      this.EditCollegeForm.setValue({
        CollegeId:result.collegeId,
        CourseName:result.courseName,
        CollegeName:result.collegeName,
        SeatsAvailable:result.seatsAvailable,
        University:result.university,
        District:result.district,
        Address:result.address
        
      })
    })
  }

  OnSubmit(){
    this.backendservice.UpdateCollege(this.EditCollegeForm.value);
  }
}
