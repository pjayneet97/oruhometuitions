import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TutorsComponent } from './tutors/tutors.component';
import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './tutors/about/about.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LoaderComponent } from './loader/loader.component';



const routes: Routes = [
  { path: '', component: TutorsComponent },
  { path: '**', component: TutorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TutorsComponent,
    ContactComponent,
    AboutComponent,

    LoaderComponent,
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
RouterModule.forRoot(routes),
FormsModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFirestoreModule, 
AngularFireAuthModule, 
AngularFireStorageModule,
ScrollToModule.forRoot(),
HttpClientModule,
NgbModule
 
    
  ],
  providers: [],
})
export class AppModule { }
