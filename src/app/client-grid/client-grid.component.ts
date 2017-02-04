import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.scss']
})
export class ClientGridComponent implements OnInit {
  clients: Client[];

  constructor(private dataService: DataService) { }

  getClients(): void {
    this.dataService.getClients()
      .then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }
}
