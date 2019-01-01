import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from 'rxjs/operators';
import {Enquiry} from '../models/enquiry.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  alert=true
  contactformalert=true
  constructor(public db: AngularFirestore,public storage :AngularFireStorage,private http: HttpClient) { 
  }


  addContact(contact:{date:any,name:string,contact:string,message:string}){
    this.db.collection('ContactForm').add(contact)
    this.http.get(this.url+contact.name+'&contact='+contact.contact+'&message='+contact.message).subscribe();
  }
    
  }



