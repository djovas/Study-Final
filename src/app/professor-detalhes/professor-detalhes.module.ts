import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorDetalhesPageRoutingModule } from './professor-detalhes-routing.module';

import { ProfessorDetalhesPage } from './professor-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorDetalhesPageRoutingModule
  ],
  declarations: [ProfessorDetalhesPage]
})
export class ProfessorDetalhesPageModule {}
