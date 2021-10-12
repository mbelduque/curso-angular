import {Injectable} from '@angular/core';
import {Player} from "../interfaces/player.interface";

@Injectable({
  providedIn: 'root'
})
export class PubgService {

  private _players: Player[] = [
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

  // Servicio para cargar la lista de jugadores
  get players(): Player[] {
    return [...this._players];
  }

  // Servicio para agregar jugadores
  addPlayer(player: Player) {
    this._players.push(player);
  }

}
