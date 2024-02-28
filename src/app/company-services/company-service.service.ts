import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private hc:HttpClient) { }

  headers = {"Content-Type":"multipart/form-data"}

  company_registration_service(formData:any){
    return this.hc.post("https://localhost:44301/api/CompanyRegistration",formData);
  }


  company_login_service(body:object){
    return this.hc.post("https://localhost:44301/api/ComapnyLogin",body)
  }


  company_Applied_Recruiters_service(id:any,email:any){
    return this.hc.get(`https://localhost:44301/api/CompanyAppliedRecruiters?CompanyID=${id}&email=${email}`)
  }


  companyDetailsGet_service(){
    return this.hc.get(`https://localhost:44301/api/CompanyDetailsGetByEmail?email=${sessionStorage.getItem("CompanyLoggedEmail")}`)
  }


  Acccept_friend_request_from_recruiter_service(body:object){
    return this.hc.post("https://localhost:44301/api/AcceptFrientRequestFromRecruiter",body)
  }


  assign_Credential_To_Recruiter(data:object){
    return this.hc.post("https://localhost:44301/api/RecruiterCompany",data)
  }


  Get_Recruiters(){
    return this.hc.get("https://localhost:44301/api/Get_Recruiters_Only")
  }


  Send_Friend_To_recruiter(body:object){
    return this.hc.post("https://localhost:44301/Api/FriendRequestByCompanies",body)
  }


  get_Friend_Requests(){
    return this.hc.get(`https://localhost:44301/api/AcceptedRecruitersInCompanies?SenderID=${sessionStorage.getItem("cid")}`)
  }

  AcceptFriendRequest(body:object){
    return this.hc.post("https://localhost:44301/api/AcceptFriendRequestFromCompanies",body)
  }


  UpdateProfile(formData:FormData){
    return this.hc.post("https://localhost:44301/api/CompanyProfilePatch",formData)
  }


}
