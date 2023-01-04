import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-viewcolleges',
  templateUrl: './viewcolleges.component.html',
  styleUrls: ['./viewcolleges.component.scss']
})
export class ViewcollegesComponent {
  coursename:any
  colleges:any[]=[]

  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.coursename=params.get('course');
    })
  }

  ngOnInit(){
    this.GetCollege()
  }
  
  GetCollege(){
    this.backendservice.ViewColleges(this.coursename).subscribe((data:any)=>{
      this.colleges= data;
      console.log('colleges',this.colleges);
    })
  }

}
