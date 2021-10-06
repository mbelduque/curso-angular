import {Component, Input, OnInit} from '@angular/core';

import {Player} from '../interfaces/player.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  titleApp: string = 'PlayerUnknowns Battlegrounds';

  players: Player[] = [
    {
      userName: 'nombreUsuario 1',
      level: 500
    },
    {
      userName: 'nombreUsuario 2',
      level: 500
    }
  ];

  newPlayer: Player = {
    userName: '',
    level: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }
}
