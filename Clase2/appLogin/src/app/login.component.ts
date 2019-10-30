import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
	selector: "login",
	templateUrl: "./login.component.html",
	styleUrls:["./login.component.css"]
})
export class LoginComponent {

	@Input() headline
	@Output() onLogging = new EventEmitter(); // en realidad debe ser una instancia de una clase

	loguearse(){
		this.onLogging.emit();
	}

	valorIngresado(evt){
		console.log("tipeo" + evt.target.value);
	}
}