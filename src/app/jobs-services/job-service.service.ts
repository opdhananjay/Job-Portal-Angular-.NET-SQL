import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private hc:HttpClient) { }


  overall_jobs(){
    return this.hc.get("https://localhost:44301/api/JobPostGet")
  }
  
  Apply_job_service(Req:any){
    return this.hc.post("https://localhost:44301/api/AppliedPlease",Req)
  }
  



}
