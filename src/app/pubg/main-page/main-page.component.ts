import {Component, OnInit} from '@angular/core';

interface Player {
  userName: string;
  level: number;
}

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
      userName: 'Belduque',
      level: 439
    },
    {
      userName: 'ElKuloMeza',
      level: 234
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
