import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProfessorPageRoutingModule } from './listar-professor-routing.module';

import { ListarProfessorPage } from './listar-professor.page';
import { IsoDatePipe } from '../pipes/iso-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProfessorPageRoutingModule
  ],
  declarations: [ListarProfessorPage, IsoDatePipe]
})
export class ListarProfessorPageModule {}
