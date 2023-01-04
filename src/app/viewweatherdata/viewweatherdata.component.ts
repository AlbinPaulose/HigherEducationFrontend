import { Component } from '@angular/core';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-viewweatherdata',
  templateUrl: './viewweatherdata.component.html',
  styleUrls: ['./viewweatherdata.component.scss']
})
export class ViewweatherdataComponent {
  constructor(private backendservice:BackEndServiceService){}
  Dataarray:any[]=[];

  ngOnInit(){
    console.log("hi");
    this.backendservice.GetWeatherData().subscribe((res)=>{
      this.Dataarray=res;
    })
  }
}
