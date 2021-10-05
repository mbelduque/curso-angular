import {Component, Input, OnInit} from '@angular/core';

import {Player} from '../interfaces/player.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  // Trae la data del arreglo players-list del componente padre
  @Input() players: Player[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
