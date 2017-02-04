import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {
  projects: Project[];

  constructor(private dataService: DataService) { }

  getProjects(): void {
    this.dataService.getProjects()
      .then(projects => this.projects = projects.reverse().slice(0, 6));
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
