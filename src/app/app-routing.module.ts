import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterRegistrationComponent } from './recruiter-registration/recruiter-registration.component';
import { AdminComponent } from './admin/admin.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { recuiterAuthGuardGuard } from './recruiter-authentication/recuiter-auth-guard.guard';
import { HomePageApplicatonComponent } from './home-page-applicaton/home-page-applicaton.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { RecruiterProfileEditComponent } from './recruiter-profile-edit/recruiter-profile-edit.component';
import { LatestsJobsComponent } from './latests-jobs/latests-jobs.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { userAuthenticationGuardGuard } from './users-authentications/user-authentication-guard.guard';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { AppliedRrecruitersOnCompaniesComponent } from './applied-rrecruiters-on-companies/applied-rrecruiters-on-companies.component';
import { companyAuthenticationGuard } from './company-authentication/company-authentication.guard';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { RecruiterCompanyLoginForRecruiterComponent } from './recruiter-company-login-for-recruiter/recruiter-company-login-for-recruiter.component';
import { RecruiterConpanyHomeComponent } from './recruiter-conpany-home/recruiter-conpany-home.component';
import { ViewDetailsJobsComponent } from './view-details-jobs/view-details-jobs.component';
import { HireRecruitesComponent } from './hire-recruites/hire-recruites.component';
import { FriendrequestsToRecruiterFromCompComponent } from './friendrequests-to-recruiter-from-comp/friendrequests-to-recruiter-from-comp.component';
import { ReceiveFriendRequestsComponent } from './receive-friend-requests/receive-friend-requests.component';
import { AppliedCompaniesPendingInRecruiterComponent } from './applied-companies-pending-in-recruiter/applied-companies-pending-in-recruiter.component';

const routes: Routes = [
  {path:"",component:HomePageApplicatonComponent},
  {path:"RecruiterRegistration",component:RecruiterRegistrationComponent},
  {path:"admin",component:AdminComponent},
  {path:"RecruiterLogin",component:RecruiterLoginComponent},
  {path:"RecruiterHome",component:RecruiterHomeComponent,canActivate:[recuiterAuthGuardGuard]},
  {path:"CompanyRegistration",component:CompanyRegistrationComponent},
  {path:"CompanyLogin",component:CompanyLoginComponent},
  {path:"CompanyHome",component:CompanyHomeComponent,canActivate:[companyAuthenticationGuard]},
  {path:"RecruiterEdit",component:RecruiterProfileEditComponent ,canActivate:[recuiterAuthGuardGuard]},
  {path:"Latest-jobs",component:LatestsJobsComponent},
  {path:"Create-login",component:UserAuthComponent},
  {path:"user-home",component:UserHomeComponent,canActivate:[userAuthenticationGuardGuard]},
  {path:"List-Companies",component:ListCompaniesComponent,canActivate:[recuiterAuthGuardGuard]},
  {path:"AppliedRecruitersOnCompany",component:AppliedRrecruitersOnCompaniesComponent,canActivate:[companyAuthenticationGuard]},
    
  {path:"manage",component:ManageCompanyComponent},
  {path:"RecruiterCompanyLogin",component:RecruiterCompanyLoginForRecruiterComponent},
  {path:"RcHome",component:RecruiterConpanyHomeComponent,canActivate:[recuiterAuthGuardGuard]},
  {path:"ViewJob",component:ViewDetailsJobsComponent},
  {path:"HireR",component:HireRecruitesComponent,canActivate:[companyAuthenticationGuard]},
  {
    path:"fr",component:FriendrequestsToRecruiterFromCompComponent,canActivate:[recuiterAuthGuardGuard]
  },
  {path:"receiveFriendReq",component:ReceiveFriendRequestsComponent,canActivate:[recuiterAuthGuardGuard]},
  {path:"AppliedCompPending",component:AppliedCompaniesPendingInRecruiterComponent,canActivate:[recuiterAuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
