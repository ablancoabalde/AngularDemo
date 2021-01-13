import { Component } from '@angular/core';

@Component({
  selector: 'videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css'],
})
export class VideogamesComponent {
  nameComponent: string;
  bestGame: string;

  bestRetroGame: string;
  showRetro: boolean;

  color: string;

  listVideogames: Array<string>;

  constructor() {
    this.nameComponent = 'VideoGames';
    this.bestGame = 'GTA5';
    this.bestRetroGame = ' Super Mario 64';
    this.showRetro = true;
    this.color = 'yellow';
    this.listVideogames = [
      'The Simpsons',
      'Assassin`s Credd',
      'GTA5',
      'Tekken',
      'Call of Duty',
    ];
  }
}
