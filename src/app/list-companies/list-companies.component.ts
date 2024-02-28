import { Component, OnInit } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { FrientRequestByRecruiter } from '../Models';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {

  constructor(private recruiter: RecruiterServiceService) { }

  ngOnInit() {
    this.Get_All_companies()
    this.get_login_recruiter_data()
  }

  All_companies: any;
  Recruiter_id!: any;

  Get_All_companies() {
    this.recruiter.get_companiesFor_recruiter().subscribe((data: any) => {
      console.log(data)
      this.All_companies = data

    })
  }



  // isButtonClicked = false;
  // companyStates: { [companyId: number]: boolean } = {};
  clickedCompanies = new Set<number>();

  sentFriendRequest(companyId: number | undefined) {


    if (companyId) {
      this.recruiter.join_company_by_recruiter_service({ "senderID": this.Recruiter_id, "receiverID": companyId }).subscribe((data:any) => {
        
        if(data==="Friend Request Sent Successfully"){
          this.clickedCompanies.add(companyId);
          alert(data)
        }
        else{
          alert("Already Sent a Request")
        }
      })
    } else {
      console.log("undefined")
    }
  }

  isButtonClicked(companyId: number): boolean {
    return this.clickedCompanies.has(companyId);
  }

  get_login_recruiter_data() {
    this.recruiter.recruiter_details_for_id().subscribe((data: any) => {
      this.Recruiter_id = data[0].rid
      sessionStorage.setItem("LoginRecruiterID",data[0].rid)
      console.log(typeof this.Recruiter_id)
    })
  }


}
