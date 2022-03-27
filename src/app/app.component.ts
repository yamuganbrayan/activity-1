import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'User', url: '/folder/user', icon: 'mail' }
  ];
  public labels = [];
  constructor() {}
}
