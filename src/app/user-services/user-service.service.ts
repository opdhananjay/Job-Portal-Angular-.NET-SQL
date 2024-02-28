import { HttpClient } from '@angular/common/http';
import { KeyedWrite } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private hc:HttpClient) { }

  user_registration_service(body:object){

    return this.hc.post("https://localhost:44301/api/UserRegistration",body)

  }


  usr_login_service(body:object){
    return this.hc.post("https://localhost:44301/api/UserLogin",body)
  }

  Get_login_user_data(){
    return this.hc.get(`https://localhost:44301/api/GetUserDataByEmail?email=${sessionStorage.getItem("User-Logged-email")}`)
  }
  GEt_JobSearch(keyword:any){
    return this.hc.get(`https://localhost:44301/api/JobSearch?jobrole=${keyword}`)
  }

  Apply_job_service(Req:any){
    return this.hc.post("https://localhost:44301/api/AppliedPlease",Req)
  }


}
