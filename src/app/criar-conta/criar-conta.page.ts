import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as firebase from 'firebase';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})

export class CriarContaPage implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(private autenticacao: AutenticacaoService, private router: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    this.autenticacao.cadastrar(this.email, this.password).then((resposta) => {

      console.log('resposta', resposta);

      this.router.navigate(['/cadastro-realizado']);
    }).catch((erro) => {
      console.error(erro);

      alert("Email/Senha Inválido!")
    });
  }
}
