export class PagingObject<T> {
    constructor(
        public href: string,
        public items: T[],
        public limit: number,
        public next: string,
        public offset: number,
        public previous: string,
        public total: number
    ) {}
}
