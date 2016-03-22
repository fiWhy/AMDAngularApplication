import '../entity/authorize.entity';
export class AuthorizeResource {
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;
        this.resourceLink = this.$resource(this.config.mainPaths.authorize);
    }
    isLoggedIn() {
        return this.resourceLink.get();
    }
}
AuthorizeResource.$inject = ['$resource', 'config'];
