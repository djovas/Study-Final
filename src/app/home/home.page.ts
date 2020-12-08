import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  estudar() {
    this.router.navigateByUrl('/listar-professor')
  }

  darAula() {
    this.router.navigateByUrl('/login')
  }

}
