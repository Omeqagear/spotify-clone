export class AccessToken {
    constructor(
        public access_token: string,
        public token_type: string,
        public expire_in: number
        ) {}
}
