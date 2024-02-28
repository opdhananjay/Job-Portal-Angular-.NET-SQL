import { Component, OnInit } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';

@Component({
  selector: 'app-view-details-jobs',
  templateUrl: './view-details-jobs.component.html',
  styleUrls: ['./view-details-jobs.component.css']
})
export class ViewDetailsJobsComponent implements OnInit {


  constructor(private recruiter:RecruiterServiceService){}

  jobData!:any;
  public storedRcId = sessionStorage.getItem('ClickedJobId');
// Convert the retrieved value to a number (assuming it's stored as a string)
public rcIdValue = this.storedRcId ? +this.storedRcId : 0;

  GetJobById(){
    this.recruiter.view_job_servce(this.rcIdValue).subscribe((data)=>{
      this.jobData = data
    })
  }


ngOnInit() {
  this. GetJobById()
  setTimeout(() => {
    this.Applied_candidates_for_job()
  }, 3000);
}

jobid = sessionStorage.getItem("ClickedJobId")
AppliedCandidates:any

Applied_candidates_for_job(){
  this.recruiter.View_job_details_service(this.jobid).subscribe((data)=>{
    this.AppliedCandidates = data
  })
}




}
