import {Component, Input, OnInit} from '@angular/core';

import {Player} from "../interfaces/player.interface";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  // Trae la data del arreglo players-list del componente padre
  @Input() players: Player[] = [];

  @Input() newPlayer: Player = {
    userName: '',
    level: 0
  };

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
    console.log(this.players);
  }

}
