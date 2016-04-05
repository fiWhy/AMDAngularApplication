import {IMetaEntity, MetaEntity} from 'core/entity/meta.entity.ts';
export class ResponseIntersceptor {
    response(response) {
        return response;
    }
    responseError(response) {
        return response;
    }
}