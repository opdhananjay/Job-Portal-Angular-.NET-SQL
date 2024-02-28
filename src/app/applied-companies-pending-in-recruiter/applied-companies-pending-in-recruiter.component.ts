import { Component } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';

@Component({
  selector: 'app-applied-companies-pending-in-recruiter',
  templateUrl: './applied-companies-pending-in-recruiter.component.html',
  styleUrls: ['./applied-companies-pending-in-recruiter.component.css']
})
export class AppliedCompaniesPendingInRecruiterComponent {

constructor(private service:RecruiterServiceService){}

ngOnInit(){
  this.get_applied_pending_comp()
}
  
AllData:any

get_applied_pending_comp(){
  this.service.Get_Applied_Pending_In_AppliedCompanies().subscribe((data)=>{
    this.AllData = data
  })
}


}
