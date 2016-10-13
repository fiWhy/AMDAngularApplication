import {IPostsService} from '../services/posts.service';
import {Post, IPost, IPostsList} from '../entities/posts.entity';
import {ListController} from '../../../core/base/controller/list.controller';
import {ISweetAlertService} from '../../../core/services/alert/alerts/sweet.alert.service';
export class PostsController extends ListController<IPost> {
    static $inject = ['PostsService', 'SweetAlertService', '$mdDialog', '$scope'];
    private editAble: IPost;
    constructor(
        private PostsService: IPostsService,
        private SweetAlertService: ISweetAlertService,
        private $mdDialog,
        private $scope

    ) {
        super();
        this.service = PostsService;
        this.load(true);
    }

    private removeItem(index: number) {
        this.SweetAlertService.setOptions({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: "warning",
            showCancelButton: true,
        })
        this.SweetAlertService.showAlert((res) => {
            this.service.delete(this.list[index].id)
                .then((res) => {
                    this.changePage(this.pagination.current_page, true);
                    this.SweetAlertService.setOptions({
                        title: 'Удалено!',
                        text: 'Запись успешно удалена'
                    });
                    this.SweetAlertService.showAlert();
                });
        });
    }

    private addItem() {
        this.openDialog();
        this.editAble = new Post();
    }

    private editItem(index: number) {
        this.editAble = new Post(this.list[index]);
        console.log(this.editAble);
        this.openDialog();
    }

    private openDialog() {
        this.$mdDialog.show({
            templateUrl: './app/modules/posts/templates/edit.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: true,
            scope: this.$scope,
            preserveScope: true
        });
    }

    
}