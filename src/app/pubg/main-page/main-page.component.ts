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

  constructor() {
  }

  ngOnInit(): void {
  }

}
