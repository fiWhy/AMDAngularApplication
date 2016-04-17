interface IMetaEntity {
    code: number;
    error_message?: string;
}

interface IResponseEntity<T> {
    meta: IMetaEntity;
    data: T;
}

