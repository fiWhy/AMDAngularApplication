export interface IResponseEntity {
    code: number;
    error_message: string;
}

export class ResponseEntity
    implements IResponseEntity {
    constructor(public code: number, public error_message: string) {}
}