export interface IAuthorizeEntity {
    isAuthorized?: boolean;
    userInfo?: {}
}

export class AuthorizeEntity
    implements IAuthorizeEntity {
    constructor(public isAuthorized: boolean, public userInfo: {}) {

    }
}