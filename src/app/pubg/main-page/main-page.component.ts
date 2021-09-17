import {Component, OnInit} from '@angular/core';

import {Player} from '../interfaces/player.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  titleApp: string = 'PlayerUnknowns Battlegrounds';

  newPlayer: Player = {
    userName: '',
    level: 0
  };

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

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    if (this.newPlayer.userName.length === 0) {
      return;
    }
    console.log(this.newPlayer);
    this.players.push(this.newPlayer);
    this.newPlayer = {
      userName: '',
      level: 0
    };
  }
}
