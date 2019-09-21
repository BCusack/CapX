import { Injectable } from '@angular/core';
import { Project } from '../project';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  private itemsCollection: AngularFirestoreCollection<Project>;
  items: Observable<Project[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Project>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  getProject() {

  }
  addProject(item: Project) {
    this.itemsCollection.add(item);
  }
}
