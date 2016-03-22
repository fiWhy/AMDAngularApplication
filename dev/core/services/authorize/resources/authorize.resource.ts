import '../entity/authorize.entity';

interface IAuthorizeAccessResource {
    isLoggedIn(): IAuthorizeEntity;
}

interface IAuthorizeResource
    extends ng.resource.IResource<IAuthorizeEntity> {
    
}

export class AuthorizeResource 
    implements IAuthorizeAccessResource{
        static $inject = ['$resource', 'config'];
        private resourceLink: ng.resource.IResourceClass<IAuthorizeResource>;
        constructor(private $resource: ng.resource.IResourceService, private config) {
            this.resourceLink = this.$resource(this.config.mainPaths.authorize);
        }
        
        isLoggedIn(): IAuthorizeEntity {
            return this.resourceLink.get();
        }
    }