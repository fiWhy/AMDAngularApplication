export interface IResponseEntity {
    meta;
}

export class ResponseEntity
    implements IResponseEntity {
    meta = {};
    constructor(code: number, error_message: string) {
        this.meta.code = code;
        this.meta.error_message = error_message;
    }
}