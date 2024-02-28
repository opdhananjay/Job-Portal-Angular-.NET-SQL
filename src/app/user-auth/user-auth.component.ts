import { Component } from '@angular/core';
import { UserServiceService } from '../user-services/user-service.service';
import { UserLogin, UserRegistration } from '../Models';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {



  showLogin = false;

  openLogin() {
    this.showLogin = true
  }
  openSignLogin() {
    this.showLogin = false

  }

  constructor(private userService: UserServiceService, private route: Router) { }

  confirmPassword: string = '';

  NewUser: UserRegistration = new UserRegistration("", "", "", 0)



  user_registration() {

    if (this.NewUser.Password === this.confirmPassword) {

      this.userService.user_registration_service(this.NewUser).subscribe((data) => {

        alert(data)

      })
    }
    else{
      alert("Password & Confirm Password   Not Matching")
    }
  }

  NewLoginUser: UserLogin = new UserLogin("", "");

  // ngOnInit() {
  //   this.passwordMatchValidator(NgForm)
  // }

  // passwordMatchValidator(reg:any) {
  //   const password = reg.get('password').value;
  //   const confirmPassword = reg.get('confirmPassword').value;

  //   return password === confirmPassword ? null : { mismatch: true };
  // }


  
  user_login() {
    this.userService.usr_login_service(this.NewLoginUser).subscribe((data: any) => {
      

      if (data === "Login successful") {
        sessionStorage.setItem("User_login-Data", data);
        sessionStorage.setItem("User-Logged-email", this.NewLoginUser.Email)
       
        this.route.navigate(["/user-home"])
        this.Get_user_data()
      }
      else {
        alert(data)
      }




    })
  }



  Get_user_data(){
    this.userService.Get_login_user_data().subscribe((data:any)=>{
      sessionStorage.setItem("User-Logged-id-for-Apply",data[0].userId)
      
    })
  }



}
