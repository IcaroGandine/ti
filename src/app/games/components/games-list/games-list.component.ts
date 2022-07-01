import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  constructor() { }

  imgs = [
    {
      id: 1,
      url: 'assets/img1.jpg',
    },

    {
      id: 2,
      url: 'assets/img2.jpg',
    },

    {
      id: 3,
      url: 'assets/img3.jpg',
    }
  ]

  ngOnInit(): void {
  }

}
