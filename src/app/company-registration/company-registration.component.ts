import { Component } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { Router } from '@angular/router';
import { CompanyRegistrationModel } from '../Models';
import { CompanyServiceService } from '../company-services/company-service.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent {

body:CompanyRegistrationModel = new CompanyRegistrationModel("","","","","",new Date(),"")
selectedimg:File|null=null;

constructor(private company:CompanyServiceService,private route:Router){}

onFileSelect(event:any){

  const inputElement = event.target as HTMLInputElement;
  if(inputElement.files && inputElement.files.length>0){
    this.selectedimg = inputElement.files[0];
    console.log(this.selectedimg)

  }

}


postCompanyRegistration(){

  const formData = new FormData();
  formData.append('jsondata',JSON.stringify(this.body))

  if(this.selectedimg){
      formData.append('file',this.selectedimg,this.selectedimg.name)
  }


  this.company.company_registration_service(formData).subscribe((data)=>{
     if(data==="Registration successful."){
       alert(data)
       this.route.navigate(["/CompanyLogin"])
       this.body = new CompanyRegistrationModel("","","","","",new Date(),"");
       this.selectedimg = null;
    }

    else if(data==="Email already exists. Registration failed."){
      alert("Email Already Exist")
    }

    else if(data!=="Registration successful"){
      alert("Enter Remaining Details")
    }
    console.log(this.body)
  })


}


}
