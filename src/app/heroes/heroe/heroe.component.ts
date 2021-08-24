import {Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  name = 'Spiderman';
  age = 30;

  getHeroe(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Ironman';
  }

  changeAge(): void {
    this.age = 35;
  }
}
