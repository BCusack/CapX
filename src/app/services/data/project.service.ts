import { Injectable } from '@angular/core';
import { Project } from '../project';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Observable<Project[]>;
  private projectCollection: AngularFirestoreCollection<Project>;
  constructor(private afs: AngularFirestore) {
    this.projectCollection = this.afs.collection<Project>('Project', ref => {
      return ref.orderBy('owner');
    });
    this.projects = this.projectCollection.valueChanges();
  }
  public getProjects(): Observable<Project[]> {
    return this.projects;
  }

  getProject(id: string): Observable<Project> {
    return this.projectCollection.doc<Project>(id).valueChanges().pipe(
      take(1),
      map(project => {
        project.id = id;
        return project;
      })
    );
  }

  addProject(project: Project): Promise<DocumentReference> {
    console.log(project);
    return this.projectCollection.add(project);
  }

  updateProject(project: Project): Promise<void> {
    return this.projectCollection.doc(project.id).update({ name: project.title, notes: project.notes });
  }

  deleteProject(id: string): Promise<void> {
    return this.projectCollection.doc(id).delete();
  }
}
