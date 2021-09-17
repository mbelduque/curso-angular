import {Component, Input, OnInit} from '@angular/core';

import {Player} from '../interfaces/player.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  // Trae la data del arreglo players del componente padre
  @Input() players: Player[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
