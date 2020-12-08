import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
   
  constructor(private autenticacao: AutenticacaoService, private router: Router, private formBuilder: FormBuilder) {
    // this.autenticacao.logout().then((dados) => {
    //   this.autenticacao.setUsuarioLogado(false);
    // }).catch((erro) => {
    //   console.log('Erro Logout:' + erro);
    // });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  logar() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.autenticacao.logar(email, password).then((resposta) => {

      console.log('resposta', resposta);

      this.autenticacao.setUsuarioLogado(true);

      this.router.navigate(['/perfil-professor']);

    }).catch((erro) => {
      console.log('Erro no login:', erro);

      alert("Email ou Senha Inválido!")
    });
  }

}
