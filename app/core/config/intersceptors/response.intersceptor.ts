import {IResponseEntity, ResponseEntity} from 'core/entity/response.entity.ts';
export class ResponseIntersceptor {
    response(response) {
        if(!response.meta)
            response.meta = new ResponseEntity(response.headers.code, response.headers.error || 'Something went wrong!');
        return response;
    }
    responseError(response) {
        return response;
    }
}