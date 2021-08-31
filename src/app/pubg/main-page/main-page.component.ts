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
    userName: 'Mauricio',
    level: 500
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.newPlayer);
  }
}
