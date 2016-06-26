export interface IMetaEntity {
    code: number;
    error_message?: string;
}

export interface IPagination {

}

export interface IResponse<T> {
    meta: IMetaEntity;
    data: T;
}

export interface IListResponse<T> {
    data: T;
    meta: IPagination;
}

export interface ISingleResponse<T> {
    data: T;
}


