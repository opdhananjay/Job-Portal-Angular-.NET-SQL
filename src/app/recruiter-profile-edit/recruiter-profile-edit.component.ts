import { Component, OnInit } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { EditRecruiter } from '../Models';

@Component({
  selector: 'app-recruiter-profile-edit',
  templateUrl: './recruiter-profile-edit.component.html',
  styleUrls: ['./recruiter-profile-edit.component.css']
})
export class RecruiterProfileEditComponent implements OnInit {

  constructor(private Recruiter: RecruiterServiceService) { }

  email1!: any;
  myData!: any;
  recruiterinfo!: any;
  selectImg: any;
  updated: any;

  updatedname: any;
  updatephone1:any
  updatephone2:any
  updatedpassword: any;


   showProgressBar: boolean = false;

  startProgressBar() {
    this.showProgressBar = true;
    // You can add logic here to handle the profile picture upload
    // For example, trigger an HTTP request to upload the picture
    // After the upload is complete, set this.showProgressBar = false;
    setTimeout(() => {
      this.showProgressBar = false;
    }, 3000); // Assuming the upload takes 3 seconds
  }

  ngOnInit() {
    this.recruiter_get_data();
  }

  recruiter_get_data() {
    this.email1 = sessionStorage.getItem("RecruiterEmail");
    this.Recruiter.recruiter_details(this.email1).subscribe((data) => {
      this.myData = data;
      console.log(data);

      if (Array.isArray(this.myData)) {
        let firstValue = this.myData[0];
        this.recruiterinfo = firstValue;

        // Update the properties here
        this.updatedname = this.recruiterinfo?.rName;
        this.updatedpassword = this.recruiterinfo?.rPassword;
        this.updatephone1 = this.recruiterinfo?.rPhone1;
        this.updatephone2 = this.recruiterinfo?.rPhone2;

      } else {
        console.log("recruiterdata is not an array or is undefined");
      }
    });
  }

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectImg = inputElement.files[0];
      console.log(this.selectImg);
    }
  }

  updateProfile() {
    console.log(this.updatedpassword);
    console.log(this.updatedname);

    setTimeout(() => {
      const formData = new FormData();

      formData.append(
        'jsondata',
        JSON.stringify({
          Name: `${this.updatedname}`,
          Email:  `${this.email1}`,
          Password: `${this.updatedpassword}`,
          Phone1:  `${this.updatephone1}`,
          Phone2: `${this.updatephone2}`
        })
      );

      if (this.selectImg) {
        formData.append('Picurl', this.selectImg, this.selectImg.name);
      }

      this.Recruiter.RecruiterPatch(formData).subscribe((data) => {
        this.updated = data;
        console.log(this.updated);
        window.location.reload();
      });
    }, 1000);
  }
}
