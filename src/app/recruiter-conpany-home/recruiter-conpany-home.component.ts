import { Component, OnInit } from '@angular/core';
import { job_post } from '../Models';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';

@Component({
  selector: 'app-recruiter-conpany-home',
  templateUrl: './recruiter-conpany-home.component.html',
  styleUrls: ['./recruiter-conpany-home.component.css']
})
export class RecruiterConpanyHomeComponent implements OnInit{



  constructor(private recruiter:RecruiterServiceService){}

  public storedRcId = sessionStorage.getItem('RCid');
// Convert the retrieved value to a number (assuming it's stored as a string)
public rcIdValue = this.storedRcId ? +this.storedRcId : 0;

   body1: job_post = new job_post(
    "",
    '',
    '',
    '',
    '',
    0,
    '',
    '',
    '',
    '',
    0,
    0,
    0,
    0,
    0,
    '',
    '',
    '',
    '',
    this.rcIdValue
  );


job_post(){
  this.recruiter.job_post_service(this.body1).subscribe((data:any)=>{
    if(data=="Job posting inserted successfully."){
      alert("Job Posted Succefully...")

    }else if(data!=="Job posting inserted successfully."){
      alert("Something Wrong")
    }
  })
}



allJobs!:any

Get_posted_job_on_home(){
  this.recruiter.get_jobs_by_rcid(this.rcIdValue).subscribe((data)=>{
    console.log(data)
    this.allJobs= data
  })
}


Get_job_id(jobID:any){
  sessionStorage.setItem("ClickedJobId",jobID)
  
}


ngOnInit() {
  // this.job_post()
  this.Get_posted_job_on_home()
}


}

