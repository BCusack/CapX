import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/data/project.service';
import { Project } from 'src/app/services/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project: Project;
  projectForm;
  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) {
    this.projectForm = this.formBuilder.group({
      title: '',
      description: '',
      owner: '',
      location: '',
      contractors: '',
      stakeHolders: '',
    });

  }

  ngOnInit() {

  }
  onSubmit(projectData: Project) {
    // Process checkout data here

    this.projectService.addProject(projectData).then(() => this.router.navigate(['/']));

    this.projectForm.reset();


  }
}
