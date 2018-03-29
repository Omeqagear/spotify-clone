import { Followers } from './followers';
import { Image } from './image';

export class Artist {
    constructor(
        public followers: Followers,
        public genres: string[],
        public images: Image[],
        public popularity: number
    ) {}
}
