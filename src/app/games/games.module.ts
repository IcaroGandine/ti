import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import {CarouselModule} from 'primeng/carousel'



@NgModule({
  declarations: [
    GamesListComponent,
    

  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class GamesModule { }
