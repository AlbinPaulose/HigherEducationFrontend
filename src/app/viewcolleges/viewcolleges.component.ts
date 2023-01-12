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
  selectedFilterType:any
  filterDisplayLabel:any
  filterTypeResult:any[]=[]
  filteredOn:any

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

  GetSelectedFilteredType(event:any){
    this.selectedFilterType = event.target.value;
    if(this.selectedFilterType=="University"){
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
    this.backendservice.FilterUsersCollegesBy(this.coursename,this.filteredOn).subscribe((result)=>{
      this.colleges = result;
    })
  }

}
