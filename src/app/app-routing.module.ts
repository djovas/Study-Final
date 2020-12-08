import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardsService } from './guards/auth-guards.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'listar-professor',
    loadChildren: () => import('./listar-professor/listar-professor.module').then(m => m.ListarProfessorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'professor-detalhes/:id',
    loadChildren: () => import('./professor-detalhes/professor-detalhes.module').then(m => m.ProfessorDetalhesPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./criar-conta/criar-conta.module').then(m => m.CriarContaPageModule)
  },
  {
    path: 'cadastro-realizado',
    loadChildren: () => import('./cadastro-realizado/cadastro-realizado.module').then(m => m.CadastroRealizadoPageModule)
  },
  {
    path: 'perfil-professor',
    loadChildren: () => import('./perfil-professor/perfil-professor.module').then(m => m.PerfilProfessorPageModule),
    canActivate: [AuthGuardsService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
