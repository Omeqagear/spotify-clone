import { SimplifiedArtist } from './simplified-artist';
import { Image } from './image';

export class SimplifiedAlbum {
    constructor(
        public album_type: string,
        public artists: SimplifiedArtist[],
        public external_urls: { [key: string]: string},
        public href: string,
        public id: string,
        public images: Image[],
        public name: string,
        public type: string,
        public uri: string
    ) {}
}
