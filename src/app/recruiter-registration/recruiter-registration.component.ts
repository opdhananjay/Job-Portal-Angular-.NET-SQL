import { Component } from '@angular/core';
import { RecruiterRegistrationModel } from '../Models';
import { HttpClient } from '@angular/common/http';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recruiter-registration',
  templateUrl: './recruiter-registration.component.html',
  styleUrls: ['./recruiter-registration.component.css']
})
export class RecruiterRegistrationComponent {

 
  

body:RecruiterRegistrationModel = new RecruiterRegistrationModel("","","",0,0, new Date());
selectImg:File|null=null;





constructor(private recruiter:RecruiterServiceService,public route:Router){}


// This Event For File Selection in REcruiter Registration - 

onFileSelected(event:any) {

  const inputElement = event.target as  HTMLInputElement;
  if(inputElement.files && inputElement.files.length>0){
    this.selectImg = inputElement.files[0];
    console.log(this.selectImg)

    
  }
}


postRecruiterRegistration(){

  const formData = new FormData();
  formData.append('jsondata',JSON.stringify(this.body))

  if(this.selectImg){
      formData.append('file',this.selectImg,this.selectImg.name)

  }
  

  

  this.recruiter.recruiter_registration(formData).subscribe((data) => {
    
    // console.log('Bridesh response:', data);

    if(data==="Registration successful."){
       alert(data)
       this.route.navigate(["/RecruiterLogin"])
       this.body = new RecruiterRegistrationModel("","","",0,0,new Date());
       this.selectImg = null;
    }

    else if(data==="Email already exists. Registration failed."){
      alert("Email Already Exist")
    }

    else if(data!=="Registration successful"){
      alert("Enter Remaining Details")
    }
    console.log(this.body)
   
  });
}


}




