define(["require", "exports"], function (require, exports) {
    "use strict";
    var AuthorizeEntity = (function () {
        function AuthorizeEntity(isAuthorized, userInfo) {
            this.isAuthorized = isAuthorized;
            this.userInfo = userInfo;
        }
        return AuthorizeEntity;
    }());
    exports.AuthorizeEntity = AuthorizeEntity;
});
