import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecruiterRegistrationModel } from '../Models';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterServiceService {

  constructor(private hc:HttpClient) { }

  // private userId!: string;

  // setUserId(id: string) {
  //   this.userId = id;
  // }

  // getUserId(): string {
  //   return this.userId;
  // }

  recruiter_registration(formData:any){


      return this.hc.post("https://localhost:44301/api/RecruiterRegistration",formData)

  }


  recruiter_login(data:any){


    return this.hc.post("https://localhost:44301/api/recruiterLogin",data)
    
  }



 


  recruiter_details(email:string){
    return this.hc.get(`https://localhost:44301/api/RecruiterRegisterGet?email=${email}`)
  }


  public email!: string;

  setEmail(email2: any) {
    this.email = email2;
    console.log("service",email2);
    
  }

  getEmail(): any {
    console.log(this.email)
    return this.email;
  }




get_companiesFor_recruiter(){
 return this.hc.get("https://localhost:44301/api/CompaniesGet")
}





join_company_by_recruiter_service(body:object){
  return this.hc.post("https://localhost:44301/api/FriendRequestByRecruiuter",body)
}




recruiter_details_for_id(){
  return this.hc.get(`https://localhost:44301/api/RecruiterRegisterGet?email=${sessionStorage.getItem("RecruiterEmail")}`)
}




Get_accepted_companies_Service(){
  return this.hc.get(`https://localhost:44301/api/AcceptedCompaniesInRecruites?SenderID=${sessionStorage.getItem("LoginRecruiterID")}`)
}


company_login_for_Recruiter(body:object){
  return this.hc.post("https://localhost:44301/api/RecruiterCompanyLoginForRecruiter",body)
}



job_post_service(body1:any){
  return this.hc.post("https://localhost:44301/api/JobPost",body1)
}


get_recruiter_company_login_data_service(e:any,p:any)
{
  return this.hc.get(`https://localhost:44301/api/RecruiterCompanyGet_data?email=${e}&password=${p}`)
}


get_jobs_by_rcid(rcid:any){
  return this.hc.get(`https://localhost:44301/api/GetJobsFromRcid?rcid=${rcid}`)
}


view_job_servce(jobid:any){
  return this.hc.get(`https://localhost:44301/api/GetJobByID?jobid=${jobid}`)
}


View_job_details_service(id:any){
 return this.hc.get(`https://localhost:44301/api/AppliedCandidatesList?jobid=${id}`)
}


Get_Applied_Pending_In_AppliedCompanies(){
  return this.hc.get(`https://localhost:44301/api/Get_Applied_Pending_CompInRecruiter?SenderID=${sessionStorage.getItem("LoginRecruiterID")}`)
}



RecruiterPatch(formData:FormData){
  return this.hc.patch("https://localhost:44301/api/RecruiterProfilePatch",formData)
}

Get_Pending_FReq_For_Recruiters(){
  return this.hc.get(`https://localhost:44301/api/Get_Pending_FReq_For_Recruiters?ReceiverID=${sessionStorage.getItem("LoginRecruiterID")}`)
}





}
