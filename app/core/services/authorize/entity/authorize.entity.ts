import {IUserEntity, UserEntity} from 'core/entity/user.entity.ts';
import {ITokenEntity, TokenEntity} from './token.entity.ts';

export interface IAuthorizeEntity {
    userData: IUserEntity;
    tokenData: ITokenEntity;
}


export class AuthorizeEntity
    implements IAuthorizeEntity {
        constructor(public userData: IUserEntity, public tokenData: ITokenEntity) {
            
        }
}