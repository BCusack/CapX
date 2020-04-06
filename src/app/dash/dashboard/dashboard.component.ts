import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../services/project';
import { ProjectService } from '../../services/project.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public projects: Observable<Project[]>;
  list: string;
  model: NgbDateStruct;
  faCalendar = faCalendar;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();

  }
  getStage(stage: string) {
    let nclass = '';
    if (stage === 'Planning') {
      nclass = 'btn btn-primary';
    } else if (stage === 'Quoting') {
      nclass = 'btn btn-secondary';
    } else if (stage === 'Execution') {
      nclass = 'btn btn-success';
    }
    return (nclass);

  }

}
