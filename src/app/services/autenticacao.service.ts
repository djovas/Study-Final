import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioLogado: boolean = false

  // setUsuarioLogado(arg0: boolean) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private fireAuth: AngularFireAuth) { }

  logar(email: string, senha: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, senha);
  }

  logout() {
    return this.fireAuth.signOut();
  }

  isUsuarioLogado() {
    return this.usuarioLogado;
  }

  setUsuarioLogado(value: boolean) {
    this.usuarioLogado = value;
  }

  cadastrar(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }
}
