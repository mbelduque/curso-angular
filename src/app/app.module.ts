import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';

// Modules
import {HeroesModule} from './heroes/heroes.module';
import {ContadorModule} from './contador/contador.module';
import {PubgModule} from './pubg/pubg.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    PubgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
