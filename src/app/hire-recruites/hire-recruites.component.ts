import { Component, Input } from '@angular/core';
import { CompanyServiceService } from '../company-services/company-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hire-recruites',
  templateUrl: './hire-recruites.component.html',
  styleUrls: ['./hire-recruites.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class HireRecruitesComponent {



  recruiter1:any
  constructor(private service:CompanyServiceService){}


  ngOnInit(){
    this.Get_R();
  }

  Get_R(){
    this.service.Get_Recruiters().subscribe((data:any)=>{
      console.log(data)
      this.recruiter1 = data
    })
  }




  sendFriendrequesttoRecruiter(recruiterid:any){

    this.service.Send_Friend_To_recruiter({
      "SenderID": sessionStorage.getItem("cid"),
      "ReceiverID": recruiterid
    }).subscribe((data)=>{
      console.log(data)
      alert(data)
      console.log(recruiterid,sessionStorage.getItem("cid"))
    })



    

  }





}
