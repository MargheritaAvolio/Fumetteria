import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { TestoMagicoModule } from '../components/testo-magico/testo-magico.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule,
    TestoMagicoModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrazionePage]
})
export class RegistrazionePageModule {}
