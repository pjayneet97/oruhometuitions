import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { EnquiryHomeTutor } from '../models/EnquiryHomeTutor.model';
import { EnquirySchoolTutor } from '../models/EnquirySchoolTutor.model';
import { EnquiryCoachingTutor } from '../models/EnquiryCoachingTutor.model';
import { Tutor } from '../models/tutor.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TutorService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  hometutenqcollection:AngularFirestoreCollection
  schooltutenqcollection:AngularFirestoreCollection
  coachingtutenqcollection:AngularFirestoreCollection
  tutotcollection:AngularFirestoreCollection
  enquiryalert=true
  dangeralert=true
  constructor(public db: AngularFirestore,private http: HttpClient) {
    this.hometutenqcollection=db.collection('hometutorenqiry',ref=>ref.orderBy('date',"desc"))
    this.schooltutenqcollection=db.collection('schooltutorenqiry',ref=>ref.orderBy('date',"desc"))
    this.coachingtutenqcollection=db.collection('coachingtutorenqiry',ref=>ref.orderBy('date',"desc"))
    this.tutotcollection=db.collection('tutors',ref=>ref.orderBy('date',"desc"))

  }
  addHomeTutorEnquiry(enquiry:EnquiryHomeTutor){

    this.hometutenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&area='+enquiry.locality+'&class='+enquiry.class+'&subjects='+enquiry.subjects).subscribe();
  }
  addSchoolTutorEnquiry(enquiry:EnquirySchoolTutor){
    this.schooltutenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&area='+enquiry.locality+'&schoolname='+enquiry.school+'&subjects='+enquiry.subjects).subscribe();
    
  }
  addCoachingTutorEnquiry(enquiry:EnquiryCoachingTutor){
    this.coachingtutenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&area='+enquiry.locality+'&coachingname='+enquiry.institute+'&subjects='+enquiry.subjects).subscribe();
  }

  addTutor(tutor:Tutor){
    this.tutotcollection.add(tutor)
    this.http.get(this.url+tutor.name+'&contact='+tutor.contact+'&experience='+tutor.experience+'&preferance='+tutor.preferance+'&subjects='+tutor.subjects).subscribe();
  }


  addDemo(demo:{date?:Date,name?:string,contact?:string}){
    this.db.collection('demo').add(demo)
    this.http.get(this.url+demo.name+'&contact='+demo.contact+'&type=demo tutor').subscribe();
  }


}
