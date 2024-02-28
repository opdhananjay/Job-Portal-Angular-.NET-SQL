import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-applicaton',
  templateUrl: './home-page-applicaton.component.html',
  styleUrls: ['./home-page-applicaton.component.css']
})
export class HomePageApplicatonComponent {

constructor(private route:Router){}


 check =  false

change(vale:any){
  sessionStorage.setItem("check",vale)
  console.log(vale)
}


  openLogin(){
    this.route.navigate(["Create-login"])
  }



}
