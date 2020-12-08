import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { runInThisContext } from 'vm';
import { AlertController } from '@ionic/angular';

import { Professor } from 'src/app/models/professor.model';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-detalhes',
  templateUrl: './professor-detalhes.page.html',
  styleUrls: ['./professor-detalhes.page.scss'],
})
export class ProfessorDetalhesPage implements OnInit {

  public professor: Professor = null;
  public professorAux: Professor = {
    id: '',
    nome: '',
    materia: '',
    telefone: '',
    descricao: '',
    horario: '',
    dataCriacao: ''
  };

  public form: boolean = false;

  public modoEdicao: boolean = false;

  private id = null;


  constructor(private alerta: AlertController,
    private routeActive: ActivatedRoute,
    private router: Router,
    private professorService: ProfessorService) {

    this.id = this.routeActive.snapshot.paramMap.get('id');

    this.professorService.getProfessorById(this.id).then((professor) => {

      this.professor = {
        id: professor.id,
        nome: professor.nome,
        materia: professor.materia,
        telefone: professor.telefone,
        descricao: professor.descricao,
        horario: professor.horario,
        dataCriacao: professor.dataCriacao
      };

      this.form = true;

      console.log('Professor', this.professor);
    });

  }

  ngOnInit() {
  }

}
