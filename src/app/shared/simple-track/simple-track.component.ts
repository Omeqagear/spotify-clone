import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
 } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'spoty-simple-track',
  templateUrl: './simple-track.component.html',
  styleUrls: ['./simple-track.component.scss']
})
export class SimpleTrackComponent  {
  @Input() idx: number;
  @Input() track: Track;
  @Input() paused = false;
  @HostBinding('class.playing') @Input() isPlaying = false;
  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();

  onPlay(): void {
    this.play.emit();
  }

  onPause(): void {
    this.pause.emit();
  }

}
