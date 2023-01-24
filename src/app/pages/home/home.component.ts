import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userservice:UserServiceService, private router:Router){
  }
  
  ngOnInit(): void {}

  logout(){
    this.userservice.logout()
    .then( ()=> {
      this.router.navigate(['/login']);
    } )
    .catch( error => console.log(error))
  }

}