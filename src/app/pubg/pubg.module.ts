import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MainPageComponent} from './main-page/main-page.component';
import {PlayersListComponent} from './players-list/players-list.component';
import {AddPlayerComponent} from './add-player/add-player.component';

import {PubgService} from "./services/pubg.service";

@NgModule({
  declarations: [
    MainPageComponent,
    PlayersListComponent,
    AddPlayerComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    PubgService
  ]
})
export class PubgModule {
}
