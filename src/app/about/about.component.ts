import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  random_profile_picture: number = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(2))) + Math.ceil(2);
}
