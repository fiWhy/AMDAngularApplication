export interface IMetaEntity {
    code: number;
    error_message?: string;
}

export class MetaEntity
    implements IMetaEntity {
    constructor(public code: string, public error_message?: string) {
        
    }
}