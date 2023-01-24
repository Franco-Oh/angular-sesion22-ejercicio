import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister!:FormGroup;
  msgCorreoRepetido = false;
  msgRegistrado = false;
  counter:number = 5;

  constructor( private userservice:UserServiceService, private router:Router, private formBuilder:FormBuilder ){
    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      apellido:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email:['', 
        [
          Validators.required,
          // Validators.minLength(5)
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6)
        ]
      ]
    });
  }

  onSubmit(){
    console.log(this.formRegister.value);

    this.userservice.registerUser(this.formRegister.value).then( response => {
      console.log(response);
      this.msgRegistrado = true;
      setTimeout(() => {
        this.counter--;
      }, 1000);
      setTimeout(() => {
        this.counter--;
      }, 2000);
      setTimeout(() => {
        this.counter--;
      }, 3000);
      setTimeout(() => {
        this.counter--;
      }, 4000);
      setTimeout(() => {
        this.msgRegistrado = false;
        this.router.navigate(['/login']);
      }, 5000);
    })
    .catch( error => {
      console.log(error);
      this.msgCorreoRepetido = true;
      setTimeout(() => {
        this.msgCorreoRepetido = false;
      }, 5000);
    });

  }

}
