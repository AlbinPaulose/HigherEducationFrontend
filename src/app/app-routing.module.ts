import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CollegelistComponent } from './admin/collegelist/collegelist.component';
import { CollegesComponent } from './admin/colleges/colleges.component';
import { CourseregisterComponent } from './admin/courseregister/courseregister.component';
import { FuturecourseComponent } from './admin/futurecourse/futurecourse.component';
import { HomeComponent } from './home/home.component';
import { ViewcollegesComponent } from './viewcolleges/viewcolleges.component';
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';

const routes: Routes = [{path:'weather',component:ViewweatherdataComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'adminlogin',component:AdminloginComponent},
{path:'adminhome',component:AdminhomeComponent,
children:
  [{path:'courseregister',component:CourseregisterComponent}]
},
{path:'courseregister',component:CourseregisterComponent},
{path:'futurecourse',component:FuturecourseComponent},
{path:'colleges',component:CollegesComponent},
{path:'addcollege',component:CollegelistComponent},
{path:'viewcolleges/:course',component:ViewcollegesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
