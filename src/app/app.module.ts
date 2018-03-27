import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SharedModule } from './shared/shared.module';
import { PlayerModule } from './player/player.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { SearchModule } from './search/search.module';

import 'hammerjs';
import '../styles.scss';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SidenavModule,
    SharedModule,
    PlayerModule,
    ArtistModule,
    AlbumModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
