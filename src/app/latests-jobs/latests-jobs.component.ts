import { Component,OnInit } from '@angular/core';
import { JobServiceService } from '../jobs-services/job-service.service';
import { ApplyJobs } from '../Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latests-jobs',
  templateUrl: './latests-jobs.component.html',
  styleUrls: ['./latests-jobs.component.css']
})
export class LatestsJobsComponent implements OnInit {

  constructor(private jobsservice:JobServiceService,private r:Router){}

  ngOnInit() {
   this.jobs();
  }









  job:any;

  jobs(){
    this.jobsservice.overall_jobs().subscribe((data)=>{
      console.log(data)
      this.job = data
    })
  }


  Jobid!:any;
  userApplicationid!:any;

  user_login_check = sessionStorage.getItem("User_login-Data")



  Apply_For_job(job:any){
      this.jobsservice.Apply_job_service({Jobid:job,userApplicationid:sessionStorage.getItem("User-Logged-id-for-Apply")}).subscribe((data)=>{
        alert(data)
      })
  }

}
