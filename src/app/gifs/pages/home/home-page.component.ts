import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifsInterfaces';

@Component({
  selector: 'gifs-app-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifsList;
  }
}
