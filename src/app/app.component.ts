import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blogueando con Angular';
  author = 'Alberto';
  posts = [
    {title:'First', created_at: new Date(2019, 1, 1, 0, 0, 0), content: 'Happy new year!', loveIts: 5},
    {title:'Second', created_at: new Date(2019, 1, 2, 0, 0, 0), content: 'Happy Saint Basil!', loveIts: 2},
    {title:'Third', created_at: new Date(2019, 1, 3, 0, 0, 0), content: 'Happy Saint Genoveva!', loveIts: 0},
    {title:'Fourth', created_at: new Date(2019, 1, 4, 0, 0, 0), content: 'Happy Saint Rigoberto!', loveIts: -2},
    {title:'Fifth', created_at: new Date(2019, 1, 5, 0, 0, 0), content: 'Happy Saint Juan!', loveIts: 4},
    {title:'Sixth', created_at: new Date(2019, 1, 6, 0, 0, 0), content: 'Happy Epiphany!', loveIts: 1},
    {title:'Seventh', created_at: new Date(2019, 7, 1, 0, 0, 0), content: 'Happy Saint Raimon!', loveIts: 3}
  ]
}
