import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  //loginpage COMPONENTE ha una proprietà (ciao:string)

  titolo:string = "LoginPage Fumetteria DevSkill"
  
  username:string="";
  password: string="";


  constructor() { }

  clickEvento(): void{
    
    if (!this.username && !this.password){
      alert("Il nome utente o la password che hai inserito non sono corretti!  \nPer favore inserisci di nuovo i tuoi dati")
    }else if (!this.username && this.password){
      alert("Per accedere inserisci nuovamente l'username")
    }else if (this.username && !this.password){
      alert("Ciao " + this.username + "\nPer accedere inserisci nuovamente la password")
    }else
      alert("Ciao " + this.username + "!");
    }



  ngOnInit() {}

}
