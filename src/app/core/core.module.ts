import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule, RequestOptions } from '@angular/http';

import { SearchService } from './search.service';
import { AlbumService } from './album.service';
import { ArtistService } from './artist.service';
import { PlayerService } from './player.service';
import { MarketService } from './market.service';
import { SearchHistoryService } from './search-history.service';
import { StorageService } from './storage.service';
import { TokenService } from './token.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    SearchService,
    AlbumService,
    ArtistService,
    PlayerService,
    MarketService,
    SearchHistoryService,
    StorageService,
    TokenService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule should only be imported once');
    }
  }
}
