import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProfessorPageRoutingModule } from './listar-professor-routing.module';

import { ListarProfessorPage } from './listar-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProfessorPageRoutingModule
  ],
  declarations: [ListarProfessorPage]
})
export class ListarProfessorPageModule {}
