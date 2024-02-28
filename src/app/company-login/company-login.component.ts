import { Component,OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-services/company-service.service';
import { CompanyLogin } from '../Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {

constructor(private company:CompanyServiceService,private router:Router){}

ngOnInit() {
  
}

body:CompanyLogin = new CompanyLogin("","");

comapnay_login(){

  this.company.company_login_service(this.body).subscribe((data:any)=>{
    
    if (data === "Login successful") {
      sessionStorage.setItem("CompanyLogin",data);
      sessionStorage.setItem("CompanyLoggedEmail", this.body.Email)
      this.router.navigate(["/CompanyHome"])
    }
    else {
      alert(data)
    }
  })
}



// companyId:number=0

// Company_details(){
//   this.company.companyDetailsGet_service().subscribe((data:any)=>{
//     sessionStorage.setItem("cid",data[0].cid)
//     // console.log(data)
//     // console.log(this.companyId)
//   })
// }


}
