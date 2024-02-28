import { Component } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-company-login-for-recruiter',
  templateUrl: './recruiter-company-login-for-recruiter.component.html',
  styleUrls: ['./recruiter-company-login-for-recruiter.component.css']
})
export class RecruiterCompanyLoginForRecruiterComponent {

constructor(private recuiter:RecruiterServiceService,private router:Router){}

  rcEmail:any;
  rcPassword:any

 
  
  Company_recruiter_login(){
    this.recuiter.company_login_for_Recruiter({
      "rcid":sessionStorage.getItem("LoginRecruiterID"),
      "rcEmail":this.rcEmail,
      "rcPassword":this.rcPassword
    }).subscribe((data)=>{
      if(data=="Login successful"){
        this.router.navigate(["/RcHome"])
        
      }else{
        alert(data)
      }
     
    })


}

get_login_company_recruiter_data(){
  this.recuiter.get_recruiter_company_login_data_service(this.rcEmail, this.rcPassword).subscribe((data:any)=>{
    sessionStorage.setItem("RCid",data[0].RCid)
  })
}

}
