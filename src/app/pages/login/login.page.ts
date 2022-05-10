import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  titolo: string = 'LoginPage Fumetteria DevSkill';
  inputform;
  
  constructor(private fb: FormBuilder) { 

    this.inputform = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  clickEvento(): void {
    if (!this.inputform.get("username").valid && !this.inputform.get("password").valid){
      alert(
        'Il nome utente o la password che hai inserito non sono corretti!  \nPer favore inserisci di nuovo i tuoi dati'
      );
    } else if (!this.inputform.get("username").valid && this.inputform.get("password").valid){
      alert("Per accedere inserisci nuovamente l'username");
    } else if (this.inputform.get("username").valid && !this.inputform.get("password").valid) {
      alert(
        'Ciao ' +
          this.inputform.get("username").value +
          '\nPer accedere inserisci nuovamente la password'
      );
    } else alert('Ciao ' + this.inputform.get("username").value + '!');
  }

  ngOnInit() {}
}
