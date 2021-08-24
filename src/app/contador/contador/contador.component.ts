import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html'
})
export class ContadorComponent {
  title = 'Contador component';
  number = 0;
  base = 600;
  increment = (value: number) => {
    this.number += value;
  }
  decrement = (value: number) => {
    this.number -= value;
  }
}
