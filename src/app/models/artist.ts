import { Followers } from './followers';
import { Image } from './image';

export class Artist {
    id: string;
    followers: Followers;
    genres: string[];
    images: Image[];
    popularity: number;
    name: string;
    type: string;
}
