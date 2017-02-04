import { Injectable } from '@angular/core';

import { Client } from './client';
import { clients } from './clients-data';
import { Project } from './project';
import { projects } from './projects-data';

@Injectable()
export class DataService {

  getClients(): Promise<Client[]> {
    return Promise.resolve(clients);
  }

  getProjects(): Promise<Project[]> {
    return Promise.resolve(projects);
  }
}
