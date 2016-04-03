import {IResponseEntity, ResponseEntity} from 'core/entity/response.entity.ts';
export class ResponseIntersceptor {
    response(response) {
        return {
            meta: new ResponseEntity(response.status),
            data: response.data
        }
    }
    responseError(response) {
        return {
            meta: new ResponseEntity(response.status, response.error || 'error')
        }
    }
}