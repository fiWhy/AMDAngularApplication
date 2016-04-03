import {IUserEntity} from './user.entity.ts';
import {IResponseEntity} from './response.entity.ts';
import {ITokenEntity} from './token.entity.ts';

export interface IAuthorizeEntity {
    responseData?: IResponseEntity;
    userInfo: IUserEntity;
    tokenInfo: ITokenEntity;
}

export class AuthorizeEntity
    implements IAuthorizeEntity {
    constructor(public responseData: IResponseEntity, public userInfo: IUserEntity, public tokenInfo: ITokenEntity) {

    }
}