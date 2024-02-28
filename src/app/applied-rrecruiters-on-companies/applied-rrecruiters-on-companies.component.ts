import { Component,OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-services/company-service.service';
import { AssignCredential } from '../Models';


@Component({
  selector: 'app-applied-rrecruiters-on-companies',
  templateUrl: './applied-rrecruiters-on-companies.component.html',
  styleUrls: ['./applied-rrecruiters-on-companies.component.css']
})
export class AppliedRrecruitersOnCompaniesComponent implements OnInit {

  constructor(private company:CompanyServiceService){}

ngOnInit() {
  
  this.applied_Recruiters();
  

}



// companyId:number=0

// Company_details(){
//   this.company.companyDetailsGet_service().subscribe((data:any)=>{
//     sessionStorage.setItem("cid",data[0].cid)
//     // console.log(data)
//     // console.log(this.companyId)
//   })
// }





id!:any;
email!:any;
AppliedRecruiters!:any

  applied_Recruiters(){
    this.company.company_Applied_Recruiters_service(this.id=sessionStorage.getItem("cid"),this.email=sessionStorage.getItem("CompanyLoggedEmail")).subscribe((data)=>{
      console.log(data)
      this.AppliedRecruiters = data
    })
  }



  Accept_friend_Request(rid:any){
    console.log(rid)
    this.company.Acccept_friend_request_from_recruiter_service({"SenderID":rid,"ReceiverID":sessionStorage.getItem("cid")}).subscribe((data)=>{
      alert(data)
    })
  }

AssignCid!:any;
AssignRid!:any;
AssignMail!:any;
AssignPassword!:any
  

  credential_applied(rid:any){
    this.company.assign_Credential_To_Recruiter({
      "cId": sessionStorage.getItem("cid"),
      "rId": rid,
      "rcEmail": this.AssignMail,
      "rcPassword": this.AssignPassword
    }
    ).subscribe((data)=>{
      alert(data)
    })
  }


}
