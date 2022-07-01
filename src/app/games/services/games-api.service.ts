import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private http: HttpClient) { 

  }

  listGames = (params: Params) => {
    return this.http.get<any>('https://api-labs.tindin.com.br/games', {params});
  };
}
