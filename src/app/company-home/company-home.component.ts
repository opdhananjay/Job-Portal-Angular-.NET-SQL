import { Component, OnInit } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../company-services/company-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(private router:Router,public Recuiter:RecruiterServiceService,public company:CompanyServiceService,private fb: FormBuilder){}
  form:any
ngOnInit() {
  this.Company_details()

  this.form = this.fb.group({
    CEmail: ['', [Validators.required, Validators.email]],
    CName: ['', Validators.required],
    CPassword: ['', Validators.required],
    CContact: ['', Validators.required],
    Clogo: ['', Validators.required],
    CUrl: ['', Validators.required],
  });

setTimeout(() => {

  this.form.patchValue({
    CEmail: sessionStorage.getItem("CompanyLoggedEmail"),
    CName: this.compDetails[0].cname,
    CPassword: this.compDetails[0].cPassword,
    CContact: this.compDetails[0].cContact,
    Clogo: this.compProfile,
    CUrl: this.compDetails[0].cUrl,
  });
  
}, 2000);

 


}

  companyId:number=0
  compProfile:any
  compDetails:any
  Company_details(){
    this.company.companyDetailsGet_service().subscribe((data:any)=>{
      sessionStorage.setItem("cid",data[0].cid)
      console.log(data)
      this.compProfile = data[0].cLogo
      this.compDetails = data
      console.log(data)
    })
  }
  

  logOut_company(){
    this.router.navigate(["/"]);
    sessionStorage.removeItem("cid")
    sessionStorage.removeItem("CompanyLogin")
  }


  formdetails(){
    console.log(this.form.value)
  }

  selectImg: any;

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectImg = inputElement.files[0];
      console.log(this.selectImg);
    }
  }

  
  updateProfile() {
    

    setTimeout(() => {
      const formData = new FormData();

      formData.append(
        'jsondata',
        JSON.stringify(
         this.form.value
        )
      );

      if (this.selectImg) {
        formData.append('Clogo', this.selectImg, this.selectImg.name);
      }

      this.company.UpdateProfile(formData).subscribe((data) => {
        
        console.log();
        window.location.reload();
      });
    }, 1000);
  }





 


}
