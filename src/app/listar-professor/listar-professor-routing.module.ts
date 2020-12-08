import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProfessorPage } from './listar-professor.page';

const routes: Routes = [
  {
    path: '',
    component: ListarProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProfessorPageRoutingModule {}
