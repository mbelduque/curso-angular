import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Player} from "../interfaces/player.interface";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Input() newPlayer: Player = {
    userName: '',
    level: 0
  };

  @Output() onNewPlayer: EventEmitter<Player> = new EventEmitter<Player>();

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    if (this.newPlayer.userName.length === 0) {
      return;
    }
    this.onNewPlayer.emit(this.newPlayer);
    this.newPlayer = {
      userName: '',
      level: 0
    };
  }

}
