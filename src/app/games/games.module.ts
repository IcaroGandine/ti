import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import {CarouselModule} from 'primeng/carousel'
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    GamesListComponent,
    

  ],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule
  ]
})
export class GamesModule { }
