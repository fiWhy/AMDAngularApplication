import {IUserEntity, UserEntity} from '../../../entity/user.entity';
import {ITokenEntity, TokenEntity} from './token.entity';

export interface IAuthorizeEntity {
    userData: IUserEntity;
    tokenData: ITokenEntity;
}


export class AuthorizeEntity
    implements IAuthorizeEntity {
        constructor(public userData: IUserEntity, public tokenData: ITokenEntity) {
            
        }
}