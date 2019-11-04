import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
	selector: "login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent {

	@Input() headline
	@Input() emailinvalid
	@Input() passwordinvalid
	@Output() onLogging = new EventEmitter(); // en realidad debe ser una instancia de una clase
	@Output() onEmailInvalid : EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() onPasswordInvalid : EventEmitter<boolean> = new EventEmitter<boolean>();
	email: string;
	password: string;

	loguearse() {
		let flag1: boolean = this.validateEmail();
		let flag2: boolean = this.validatePassword();
		this.onEmailInvalid.emit(!flag1);
		this.onPasswordInvalid.emit(!flag2);
		if (flag1 && flag2) {
			this.onLogging.emit();
		}
	}

	validateEmail() {
		var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!this.email || !pattern.test(this.email.toLowerCase())){
			return false
		}
		return true;
	}

	validatePassword() {
		if(!this.password){
			return false;
		}
		return true;
	}

	setEmail(evt) {
		console.log("tipeo" + evt.target.value);
		this.email = evt.target.value;
	}

	setPassword(evt) {
		console.log("tipeo" + evt.target.value);
		this.password = evt.target.value;
	}
}