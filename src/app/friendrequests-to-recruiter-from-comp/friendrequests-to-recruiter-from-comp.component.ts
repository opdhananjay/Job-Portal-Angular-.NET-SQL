import { Component } from '@angular/core';
import { CompanyServiceService } from '../company-services/company-service.service';

@Component({
  selector: 'app-friendrequests-to-recruiter-from-comp',
  templateUrl: './friendrequests-to-recruiter-from-comp.component.html',
  styleUrls: ['./friendrequests-to-recruiter-from-comp.component.css']
})
export class FriendrequestsToRecruiterFromCompComponent {

constructor(private service:CompanyServiceService){}

ngOnInit(){
  this.getAppliedRecruiters();
}


rec:any

getAppliedRecruiters(){
  this.service.get_Friend_Requests().subscribe((data)=>{
    console.log(data)
    this.rec = data
  })
}







}
