import {IMetaEntity, MetaEntity} from './meta.entity.ts';

export interface IResponseEntity<T> {
    meta: IMetaEntity;
    data: T;
}

export class ResponseEntity<T>
    implements IResponseEntity<T> {
        constructor(public meta: IMetaEntity, public data: T) {
            
        }
    }