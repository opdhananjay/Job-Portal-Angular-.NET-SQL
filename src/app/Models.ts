import { DatePipe } from "@angular/common";

export class RecruiterRegistrationModel {
    constructor(
      public name: string,
      public email: string,
      public password: string,
      public phone1: number,
      public alternativePhone: number,
      public rRegisterDate : Date
      // public profilePicture: File 
    ) {}
  }

  
export class AdminClass{
  constructor(
      public adminEmail: string,
      public adminPassword: string,
  ){}
}


export class RecruiterLogin{
 
  constructor(
    public email: string,
      public password: string,
  ){}
}

export class UserRegistration{
 
  constructor(
    public fname :string,
     public Email: string,
      public Password: string,
      public Phone1:number

  ){}
}

export class UserLogin{
 
  constructor(
    public Email: string,
      public Password: string,
  ){}
}


export class CompanyRegistrationModel{
  constructor(
    public cName:string,
    public cEmail:string,
    public cPassword:string,
    public cContact:string,
    // public cLogo:string,
    public cEstablishedDate:String,
    public cCreationDate:Date,
    public cUrl:string
  ){}
}




export class CompanyLogin{
  constructor(
    public Email: string,
      public Password: string,
  ){}
}


export class FrientRequestByRecruiter{
  constructor(
    public SenderID :number,
    public ReceiverID :number
  ){}
}

export class AssignCredential{
  constructor(
    public cId:number,
    public rId:number,
    public rcEmail:string,
    public rcPassword:string
  ){}
}

export class Recruiter_company_login{
  constructor(
    public rcEmail:string,
    public rcPass:string

  ){}
}




export class job_post{

  constructor(
    public jobRole: string,
   public companyName: string,
   public jobAddressLine1: string,
   public jobAddressLine2: string,
   public jobState: string,
   public jobPinCode: number,
   public jobCity: string,
   public industryType: string,
   public department: string,
   public jobQualification: string,
   public jobMinExperience: number,
   public jobMaxExperience: number,
   public jobMinSalary: number,
   public jobMaxSalary: number,
   public jobOpenings: number,
   public employementType: string,
   public positionDate: string,
   public expirationdate: string,
   public jobdesc: string,
   public rcId: number
  ){}
}



export class ApplyJobs{
  constructor(
    public jobid:number,
    public userApplicationid:number
  ){}
}



export class EditRecruiter{
  constructor(
  public  name:string ,
  public Email:String,
  public Password:string, 
  public  Phone1:string ,
  public  Phone2:string 

  ){}
 
}