import { Component, OnInit } from '@angular/core';

import { Professor } from '../models/professor.model';

import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.page.html',
  styleUrls: ['./listar-professor.page.scss'],
})
export class ListarProfessorPage implements OnInit {

  // public listarProfessores = [
  //   { id: 1,
  //     nome: "Giovani Duarte",
  //     materia: "História",
  //     descricao: '“Pensar no passado, compreender o presente e idealizar o futuro.” - Heródoto Apaixonado por história desde a época de colégio e mais       apaixonado ainda em fazer as pessoas se apaixonarem por história, poiscomo digo, História não é difícil, você não aprendeu a gostar dela.',
  //     image: 'assets/giovani.jpg'
  //   },
  //   { id: 2,
  //     nome: "Goku",
  //     materia: "Matemática",
  //     descricao: 'Oi, eu sou o Goku!',
  //     image: 'assets/goku.png'
  //   },
  //   { id: 3,
  //     nome: "Seiya",
  //     materia: "Ciências",
  //     descricao: 'Faça elevar O cosmo no seu coração Todo o mal combate Despertar o poder',
  //     image: 'assets/seiya.png'
  //   }
  // ];

  private professores: Array<Professor> = [];

  constructor(private professorService: ProfessorService) {

    this.professorService.getAll().subscribe((professores) => {
      this.professores = []

      for (const obj of professores) {
        let professorAux: Professor;

        professorAux = {
          id: obj.payload.doc.id,
          nome: obj.payload.doc.data()['nome'],
          materia: obj.payload.doc.data()['materia'],
          telefone: obj.payload.doc.data()['telefone'],
          descricao: obj.payload.doc.data()['descricao'],
          horario: obj.payload.doc.data()['horario']
        };

        this.professores.push(professorAux);
      }
    });
  }

  ngOnInit() {
  }

}
