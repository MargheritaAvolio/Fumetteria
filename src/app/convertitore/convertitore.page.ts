import { Component, Input, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {
  misuraA: string = 'Centigradi';
  misuraB: string = 'Fahrenheit';
  
  valA: number;
  valB: number;

  ngOnInit() {}

  cambiaTipo(num) {
    if (num == 0) {
      this.misuraA = 'Centigradi';
      this.misuraB = 'Fahrenheit';
    } else if (num == 1) {
      this.misuraA = 'Kilometri';
      this.misuraB = 'Miglia';
    }
  }

  convertiGradi(valOriginale, eValA):void {
    
    if (eValA) {
      //converto in fahrenheit
      this.valB = valOriginale * (9/5) + 32;
    }else {
      this.valA = (valOriginale - 32) * (5/9);
    }
  }
}

/*convertiDistanza(valOriginale, eValA):void {
    
  if (eValA) {
    //converto in miglia
    this.valB = valOriginale / 1.609;
  }else {
    this.valA = valOriginale * 1.609;
  }
}
*/
