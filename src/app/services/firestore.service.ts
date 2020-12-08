import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';


@Injectable({
 providedIn: 'root'
})
export class FirestoreService {
    constructor(private firestore: AngularFirestore) {
    }

    createID(): string {
     return this.firestore.createId();
    }
}