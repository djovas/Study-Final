import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor(private router: Router, private autenticacao: AutenticacaoService) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.autenticacao.isUsuarioLogado()) {
      return true;
    }

    this.router.navigate(['/home'])
    return false;
  }
}
