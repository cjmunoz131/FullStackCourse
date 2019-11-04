import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appLogin';
  visible :  boolean = true;
  titulo: string ='Ingrese sus credenciales';
  emailInvalidMsj : string ='';
  passwordInvalidMsj : string = '';
  constructor(){
   /*  setTimeout(()=>{
      this.visible = false;
    },3000) */
  }

  cambiarVisibiliad(){
    this.visible = !this.visible
  }
  login(){
    this.visible = false;
  }
  emailInvalid(event){
    if(event){
      this.emailInvalidMsj = 'Email invalido, Ingresar un email válido';
    } else{
      this.emailInvalidMsj = '';
    }
    
  }
  passwordInvalid(event){
    console.log(event);
    if(event){
      this.passwordInvalidMsj = 'Password invalido, Ingresar un password válido';
    } else{
      this.passwordInvalidMsj = '';
    }
    
  }
}
