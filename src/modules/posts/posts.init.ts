import {PostsController} from './controllers/posts.controller';
import {PostsServiceImplementation} from './services/posts.service';
import {PostsServiceProvider} from './provider/posts.service.provider';
import {PostsResource} from './resources/posts.resource';
import {postsBootstrap} from './config/bootstrap';

angular.module('app.modules.posts', [])
    .factory('PostsResource', PostsResource)
    .service('PostsServiceImplementation', PostsServiceImplementation)
    .provider('PostsService', PostsServiceProvider)
    .controller('PostsController', PostsController)
    .config(postsBootstrap);

