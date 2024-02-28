import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-services/admin-service.service';
import {AdminClass} from './../Models'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
constructor(private Admin:AdminServiceService){}

NewAdmin:AdminClass = new AdminClass("","");



admin_check(){

  console.log(this.NewAdmin);
  console.log("called")
  this.Admin.admin_service(this.NewAdmin).subscribe((data:any)=>{
   alert(data)
  });
  



}



}
