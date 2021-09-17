import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MainPageComponent} from './main-page/main-page.component';
import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PlayersComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PubgModule {
}
