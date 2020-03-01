import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/services/project';
import { ProjectService } from '../../data/project.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();

  }


}
