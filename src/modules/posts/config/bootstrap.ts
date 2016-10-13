import {IMenuDirectiveServiceProviderInterface} from '../../../core/directives/menu/provider/menu.directive.service.provider';

postsBootstrap.$inject = ['MenuDirectiveServiceProvider', '$stateProvider'];

export function postsBootstrap(MenuDirectiveServiceProvider: IMenuDirectiveServiceProviderInterface, $stateProvider) {
    MenuDirectiveServiceProvider.setMenuItem('Посты', '', 'posts');
     $stateProvider
            .state('posts', {
                url: "/posts",
                controller: 'PostsController',
                controllerAs: 'posts',
                templateUrl: "./app/modules/posts/templates/index.html"
            })
}