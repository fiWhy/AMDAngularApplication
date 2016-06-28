import {IPagination} from '../../entity/r.entity';
export class ListController<T> {
    public service;
    public list: Array<T>;
    public loadMore: boolean = false;
    public pagination: IPagination;
    public conditions;
    constructor() {
        this.conditions = {
        }
    }

    load(refresh?: boolean) {
        if (this.loadMore || refresh) {
            this.loadMore = false;

            this.service.getList(this.conditions).then((response) => {
                this.list = refresh ? response.data : this.list.concat(response.data);
                this.pagination = response.meta.pagination;
                if (this.pagination.current_page < this.pagination.total_pages)
                    this.loadMore = true;
            });
        }
    }

    changePage(page: number, reload: boolean = true) {
        this.conditions.page = page;
        this.load(reload);
    }

    search() {
        this.conditions.page = 1;
        this.load(true);
    }
    
}