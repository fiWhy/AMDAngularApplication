export interface IUserEntity {
    userName: string;
    userRole: string;
}

export class UserEntity
    implements IUserEntity {
    constructor(public userName: string, public userRole: string) {
        
    }
}