import {Component, OnInit} from '@angular/core';

import {Player} from '../interfaces/player.interface';
import {PubgService} from "../services/pubg.service";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  // Trae la data del arreglo players del componente padre main-page
  // @Input() players: Player[] = [];

  get players(): Player[] {
    return this.pubgService.players;
  }

  constructor(private pubgService: PubgService) {
  }

  ngOnInit(): void {
  }

}
