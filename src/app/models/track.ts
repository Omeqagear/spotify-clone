import { SimplifiedAlbum } from './simplified-album';

export class Track {
    constructor(
        public album: SimplifiedAlbum,
        public popularity?: number
    ) {}
}
