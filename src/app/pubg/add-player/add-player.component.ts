import {Component, Input, OnInit} from '@angular/core';

import {Player} from "../interfaces/player.interface";
import {PubgService} from "../services/pubg.service";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  // @Output() onNewPlayer: EventEmitter<Player> = new EventEmitter<Player>();

  @Input() newPlayer: Player = {
    userName: '',
    level: 0
  };

  constructor(private pubgService: PubgService) {
  }

  ngOnInit(): void {
  }

  add() {
    if (this.newPlayer.userName.length === 0) {
      return;
    }
    // this.onNewPlayer.emit(this.newPlayer);
    this.pubgService.addPlayer(this.newPlayer);
    this.newPlayer = {
      userName: '',
      level: 0
    };
  }

}
