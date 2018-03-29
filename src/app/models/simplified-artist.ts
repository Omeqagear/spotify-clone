export class SimplifiedArtist {
    constructor(
        public external_urls: {[key: string]: string},
        public href: string,
        public id: string,
        public name: string,
        public type: string,
        public uri: string
    ) {}
}
