import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestoMagicoModule } from '../components/testo-magico/testo-magico.module';

import { RegistrazionePage } from './registrazione.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrazionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),TestoMagicoModule],
  exports: [RouterModule,TestoMagicoModule]
})
export class RegistrazionePageRoutingModule {}
