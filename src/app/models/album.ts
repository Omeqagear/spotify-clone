import { Copyright } from './copyright';
import { PagingObject } from './paging-object';
import { SimplifiedTrack } from './simplified-track';
import { Image } from './image';

export class Album {
    constructor(
        public copyrigt: Copyright[],
        public genre: string[],
        public images: Image[],
        public label: string,
        public popularity: number,
        public release_date: string,
        public release_date_precision: string,
        tracks: PagingObject<SimplifiedTrack>
    ) {}
}
