import { Component, Input } from '@angular/core';

import { Track } from '../../models/track';
import { Album } from '../../models/album';
import { PlayerService } from '../../core/player.service';

@Component({
  selector: 'spoty-track-result',
  templateUrl: './track-result.component.html',
  styleUrls: ['./track-result.component.scss']
})
export class TrackResultComponent {

  @Input() tracks: Track[];
  @Input() artistID: string;
  @Input() album: Album;
  @Input() playingID: string;
  @Input() paused: boolean;

  constructor(private playerService: PlayerService) { }


  play(track: Track) {
    if (this.playingID === track.id) {
      this.playerService.play();
    } else if (this.artistID) {
      this.playerService.playTrackList(
        this.tracks,
        { type: 'artist', id: this.artistID },
        track.id,
      );
    } else if (this.album) {
      this.playerService.playAlbum(this.album, track.id);
    } else {
      this.playerService.playAlbumWithID(track.album.id, track.id);
    }
  }

  pause() {
    this.playerService.pause();
  }
}
