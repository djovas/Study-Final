import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';

import { Professor } from 'src/app/models/professor.model';

import firestore from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private firestore: AngularFirestore) {

  }

  atualizar(professor: Professor) {
    console.log('Atualizar professor', professor);

    return this.firestore.doc(`professores/${professor.id}`).update(professor);
  }

  cadastrar(professor: Professor) {
    delete professor.id;
    return this.firestore.collection('professores').add(professor);
  }

  getAll() {
    return this.firestore.collection('professores').snapshotChanges();
  }

  getProfessorById(id: string) {
    return this.firestore.collection('professores').doc(id).ref.get().then((professor) => {
      if (professor.exists) {
        const dadosProfessor = professor.data();
        console.log('Firestore dadosProfessor', dadosProfessor);

        return {
          id: professor.id,
          nome: dadosProfessor['nome'],
          materia: dadosProfessor['materia'],
          telefone: dadosProfessor['telefone'],
          descricao: dadosProfessor['descricao'],
          horario: dadosProfessor['horario']
        };
      }

      return {};
    });
  }

  deletar(id: string) {
    // return this.firestore.collection(`professores/${id}`).delete();
  }
}