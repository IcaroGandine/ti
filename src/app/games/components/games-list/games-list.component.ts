import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Game } from '../../models/game';
import { GamesApiService } from '../../services/games-api.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  
  
  constructor(public authService: AuthService, private gamesApiService: GamesApiService, private router: Router) { }
  searchGames = new FormControl('');

  pageCounter = 2;
 
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
  ];

  games: any; 
  isLoggedIn: boolean | undefined
  noImgUrl = 'assets/no-image.jpg'

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe( res => {
      this.isLoggedIn = res;
    })

    this.gamesApiService.listGames({page: 1, perPage: 8}).subscribe(res=>{
      this.games = res.games;
    })

    this.searchGames.valueChanges.pipe(debounceTime(500)).subscribe( value => {
      this.gamesApiService.listGames({page: 1, perPage: 8, title: value}).subscribe(res =>{
        this.games = res.games;
        this.pageCounter = 2;
      })
    })
  }

  loadMoreData() {
    this.gamesApiService.listGames({page: this.pageCounter, perPage: 8, title: this.searchGames.value}).subscribe(res =>{
      this.games = [...this.games, ...res.games];
      this.pageCounter+=1;
    })
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
