import { Component, OnInit } from '@angular/core';
import { ApiSchema } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]

})
export class SignupComponent implements OnInit {

  public datos:ApiSchema;

  constructor(private userService:UserService) { 
    this.datos=new ApiSchema("","","","");
  }

  ngOnInit(): void {

  }

  resetForm(form?:NgForm){
      form.reset();
      this.userService.allDato = new ApiSchema();
    
  }

  onSubmit(form:NgForm){
console.log(form.value);
this.userService.postUser(form.value)
.subscribe(res=>{
alert("Cuenta correctamente creada :"+form.value.email);
this.resetForm(form);

});


  }


  


}
