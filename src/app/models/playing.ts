import { Track } from './track';

export class Playing {
    constructor(
        public track: Track,
        public paused: boolean,
        public context: {
            type: string;
            id: string;
        }
    ) {}
}
