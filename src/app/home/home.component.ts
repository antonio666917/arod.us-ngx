import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  random_profile_picture: number = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(2))) + Math.ceil(2);
  constructor() {}
  ngOnInit() {}
}
