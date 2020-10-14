import { Component, OnInit,DoCheck } from '@angular/core';
import { ApiSchema } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]

})
export class LoginComponent implements OnInit,DoCheck {
public email:string;
public password:string;
public password2:string;
public datos:ApiSchema;
public contadorCorreoValido=0;
public validator:string="Write your e-mail and password";


  constructor(private userService:UserService) { 
    this.datos=new ApiSchema("","","","");
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log("cambio de estado");
  }

  resetForm(form?:NgForm){
      form.reset();
      this.userService.allDato = new ApiSchema();
    
  }

  onSubmit(form:NgForm){
    //asignando valor del for a variables 
this.email=form.value.email;
this.password=form.value.password;
console.log(this.email+" "+this.password);

this.userService.getUsers()
.subscribe(res=>{
  this.userService.todo=res as ApiSchema[];

  //blucle de variable todo
  for(var i=0;i<this.userService.todo.length;i++){
    console.log(this.userService.todo[i]);

    //si email es valido
    if(this.email==this.userService.todo[i].email){
      this.password2=this.userService.todo[i].password;
      //si password es correcta
      if(this.password==this.password2){
        this.validator="Welcome "+this.userService.todo[i].name+" "+this.userService.todo[i].last;

      //alert(this.validator);
      //reiniciando el formulario
      this.resetForm(form);
      }else{
        this.validator="This password is not correct ,TRY AGAIN";
        //alert(this.validator);
       
      }
      break;
    }
    //si no encuentra el email en el ultimo recorrido
      this.contadorCorreoValido=this.contadorCorreoValido+=1;
      if(this.contadorCorreoValido==this.userService.todo.length){
        this.validator="This e-mail is not exist";

        //alert(this.validator);
      }
    
    }
    //reiniciando el contador y el formulario
    this.contadorCorreoValido=0;
  
  
  });
  }

}

  
  

