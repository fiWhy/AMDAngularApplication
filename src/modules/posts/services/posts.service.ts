import {IPost, IPostsList} from '../entities/posts.entity';

export interface IPostsService {
    getList();
}

export class PostsServiceImplementation implements IPostsService {
    static $inject = ['PostsResource'];
    constructor(private PostsResource) {
    }

    getList(conditions?) {
        return this.PostsResource.query(conditions).$promise
            .then((res) => {
                return res;
            })
    }

    delete(id) {
        return this.PostsResource.delete({ id: id }).$promise
                     .then(res => res);
    }
}