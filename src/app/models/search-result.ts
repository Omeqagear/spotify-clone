import { PagingObject } from './paging-object';
import { SimplifiedAlbum } from './simplified-album';
import { Artist } from './artist';
import { Track } from './track';

export class SearchResult {
    constructor(
        public query: string,
        public albums?: PagingObject<SimplifiedAlbum>,
        public artists?: PagingObject<Artist>,
        public track?: PagingObject<Track>,
        public best_match?: {
            item: Array<SimplifiedAlbum|Artist|Track>
        }
    ) {}
}
