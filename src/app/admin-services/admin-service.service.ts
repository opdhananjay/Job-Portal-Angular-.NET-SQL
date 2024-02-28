import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private hc:HttpClient) { }

  admin_service(body:object){
    
    return this.hc.post("https://localhost:44301/api/adminLogin",body)
  }

}
