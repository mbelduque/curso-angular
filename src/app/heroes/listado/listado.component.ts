import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Aquaman'
  ];
  heroeBorrado = '';

  eraseHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
