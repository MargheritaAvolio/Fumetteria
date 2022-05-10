import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  inputRegistrazform;
  
  constructor(private fb: FormBuilder) { 

    this.inputRegistrazform = fb.group({
      nomeCognome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]

    });

  }

  clickRegistra(): void {
    if (this.inputRegistrazform.get("nomeCognome").valid && this.inputRegistrazform.get("password").valid && this.inputRegistrazform.get("email").valid && this.inputRegistrazform.get("username").valid){
      alert('Complimenti ' + this.inputRegistrazform.get("username").value + ', la tua registrazione è stata effettuata con successo!')}
        else{
          alert("devo ancora modificare")
        }}
  ngOnInit() {
  }

}
