import { SimplifiedArtist } from './simplified-artist';

export class SimplifiedTrack {
    constructor(
        public artists: SimplifiedArtist[],
        public duration_ms: number,
        public external_urls: {[key: string]: string},
        public href: string,
        public id: string,
        public name: string,
        public preview_url: string,
        public type: string,
        public uri: string
    ) {}
}
