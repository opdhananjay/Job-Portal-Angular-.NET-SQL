import { Component } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { CompanyServiceService } from '../company-services/company-service.service';

@Component({
  selector: 'app-receive-friend-requests',
  templateUrl: './receive-friend-requests.component.html',
  styleUrls: ['./receive-friend-requests.component.css']
})
export class ReceiveFriendRequestsComponent {

  constructor(private service1:RecruiterServiceService,private service2:CompanyServiceService){}

  ngOnInit(){
this.Get_Pending_Req()
  }


  PendingReq:any

  Get_Pending_Req(){
    this.service1.Get_Pending_FReq_For_Recruiters().subscribe((data)=>{
        this.PendingReq = data
    })
  }


  Accept_Company(rid:any){
    this.service2.AcceptFriendRequest(
      {
        "SenderID": rid,
        "ReceiverID": sessionStorage.getItem("LoginRecruiterID")
      }
    ).subscribe((data)=>{
      alert(data)
      console.log(data)
      console.log(rid)
      window.location.reload();
    })
  }

}
