import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'To-Do', url: '/todo', icon: 'checkbox' },
    { title: 'Goals', url: '/goals', icon: 'flag' },
    { title: 'Achievements', url: '/achievements', icon: 'trophy' },
    { title: 'Notes', url: '/notes', icon: 'document-text' },
    { title: 'Video Diary', url: '/video-diary', icon: 'play' },
    { title: 'Images Diary', url: '/images-diary', icon: 'images' }
  ];
  
  constructor() {}
}
