import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { Recruiter_company_login } from '../Models';

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.css']
})
export class RecruiterHomeComponent implements OnInit{

constructor(private router:Router,public recuiter:RecruiterServiceService){}

ngOnInit() {
  this.get_login_recruiter_data1();

  setTimeout(() => {
    this.get_accepted_companies()
  }, 3000);
  
}


logOut_recruiter(){
  sessionStorage.removeItem("data");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("RCid")
  this.router.navigate(["/"]);

}


get_login_recruiter_data1() {
  this.recuiter.recruiter_details_for_id().subscribe((data: any) => {
    sessionStorage.setItem("LoginRecruiterID",data[0].rid)
  })
}



Managed_Company!:any;

get_accepted_companies(){
  this.recuiter.Get_accepted_companies_Service().subscribe((data)=>{
this.Managed_Company= data;
    console.log(data)
  })
}

// rcEmail:any;
// rcPassword:any

// Company_recruiter_login(){
//   this.recuiter.company_login_for_Recruiter({
//     "rcid":sessionStorage.getItem("RecruiterEmail"),
//     "rcEmail":this.rcEmail,
//     "rcPassword":this.rcPassword
//   }).subscribe((data)=>{
//     console.log(data)
//   })
// }




}
