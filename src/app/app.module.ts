import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruiterRegistrationComponent } from './recruiter-registration/recruiter-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component'
import { RouterModule } from '@angular/router';
import { HomePageApplicatonComponent } from './home-page-applicaton/home-page-applicaton.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { RecruiterProfileEditComponent } from './recruiter-profile-edit/recruiter-profile-edit.component';
import { RecruiterServiceService } from './Recruiter-Services/recruiter-service.service';
import { LatestsJobsComponent } from './latests-jobs/latests-jobs.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppliedRrecruitersOnCompaniesComponent } from './applied-rrecruiters-on-companies/applied-rrecruiters-on-companies.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { RecruiterCompanyLoginForRecruiterComponent } from './recruiter-company-login-for-recruiter/recruiter-company-login-for-recruiter.component';
import { RecruiterConpanyHomeComponent } from './recruiter-conpany-home/recruiter-conpany-home.component';
import { ViewDetailsJobsComponent } from './view-details-jobs/view-details-jobs.component';
import { HireRecruitesComponent } from './hire-recruites/hire-recruites.component';
import { FriendrequestsToRecruiterFromCompComponent } from './friendrequests-to-recruiter-from-comp/friendrequests-to-recruiter-from-comp.component';
import { ReceiveFriendRequestsComponent } from './receive-friend-requests/receive-friend-requests.component';
import { AppliedCompaniesPendingInRecruiterComponent } from './applied-companies-pending-in-recruiter/applied-companies-pending-in-recruiter.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruiterRegistrationComponent,
    AdminComponent,
    RecruiterLoginComponent,
    RecruiterHomeComponent,
    HomePageApplicatonComponent,
    CompanyRegistrationComponent,
    CompanyLoginComponent,
    CompanyHomeComponent,
    RecruiterProfileEditComponent,
    LatestsJobsComponent,
    UserAuthComponent,
    UserHomeComponent,
    ListCompaniesComponent,
    AppliedRrecruitersOnCompaniesComponent,
    ManageCompanyComponent,
    RecruiterCompanyLoginForRecruiterComponent,
    RecruiterConpanyHomeComponent,
    ViewDetailsJobsComponent,
    HireRecruitesComponent,
    FriendrequestsToRecruiterFromCompComponent,
    ReceiveFriendRequestsComponent,
    AppliedCompaniesPendingInRecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [RecruiterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
