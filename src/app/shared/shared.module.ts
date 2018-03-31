import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumResultComponent } from './album-result/album-result.component';
import { ArtistResultComponent } from './artist-result/artist-result.component';
import { TrackResultComponent } from './track-result/track-result.component';

import { SimpleAlbumComponent } from './simple-album/simple-album.component';
import { SimpleArtistComponent } from './simple-artist/simple-artist.component';
import { SimpleTrackComponent } from './simple-track/simple-track.component';

import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { MsToStringPipe } from './pipes/ms-to-string.pipe';
import { CopyrightPipe } from './pipes/copyright.pipe';
import { SplitNumberPipe } from './pipes/split-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    AlbumResultComponent,
    ArtistResultComponent,
    TrackResultComponent,
    SimpleAlbumComponent,
    SimpleArtistComponent,
    SimpleTrackComponent,
    MsToStringPipe,
    CopyrightPipe,
    SplitNumberPipe
  ],
  exports: [
    CommonModule,
    MaterialModule,
    AlbumResultComponent,
    ArtistResultComponent,
    TrackResultComponent,
    SimpleAlbumComponent,
    SimpleArtistComponent,
    SimpleTrackComponent,
    MsToStringPipe,
    CopyrightPipe,
    SplitNumberPipe
  ]
})
export class SharedModule { }
