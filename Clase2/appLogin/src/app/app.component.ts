import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appLogin';
  visible :  boolean = true;
  titulo:string ='Ingrese sus credenciales';
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
}
