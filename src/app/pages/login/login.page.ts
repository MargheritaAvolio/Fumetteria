import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  //loginpage COMPONENTE ha una proprietà (ciao:string)

  titolo:string = "LoginPage Fumetteria DevSkill"

  constructor() { }

  

  ngOnInit() {}

}
