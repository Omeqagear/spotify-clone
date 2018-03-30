import { Image } from './image';
import { SimplifiedArtist } from './simplified-artist';
import { PagingObject } from './paging-object';
import { SimplifiedTrack } from './simplified-track';

export class SimplifiedAlbum {
  album_type: string;
  artists: SimplifiedArtist[];
  external_urls: { [key: string]: string };
  href: string;
  id: string;
  images: Image[];
  name: string;
  type: string;
  uri: string;
  tracks: PagingObject<SimplifiedTrack>;
}
