import { Component } from '@angular/core';
import { RecruiterLogin } from '../Models';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent {


  constructor(private Recruiter: RecruiterServiceService, private route: Router) { }

  recruiter: RecruiterLogin = new RecruiterLogin("", "")


  
  recruiter_check() {

    this.Recruiter.recruiter_login(this.recruiter).subscribe((data: any) => {
      if (data === "Login successful") {
        sessionStorage.setItem("data", data);
      
        sessionStorage.setItem("RecruiterEmail", this.recruiter.email)
        this.route.navigate(["/RecruiterHome"])




        // const userId = '123'; // Replace with the actual user ID
        // this.Recruiter.setUserId(userId);

        // console.log(this.recruiter.email);

        // const remail = this.recruiter.email;
        // this.Recruiter.setEmail(remail);





      }
      else {
        alert(data)
      }



    })



    this.recruiter_get_data()


  }





  recruiter_get_data() {
    this.Recruiter.recruiter_details(this.recruiter.email).subscribe((data) => {
      console.log("login:", data)
    })

  }







}
