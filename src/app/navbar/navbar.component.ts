import { Component, OnInit } from '@angular/core';
import {RentalService} from '../services/rental.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dangeralert=true
  successalert=true
  showRouter=true
  auth =true

  constructor(public rentalservice:RentalService) { 
    
  }

  ngOnInit() {
    
  }




}
