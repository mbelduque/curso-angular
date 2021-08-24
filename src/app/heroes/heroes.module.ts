import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroeComponent} from './heroe/heroe.component';
import {ListadoComponent} from './listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule {
}
