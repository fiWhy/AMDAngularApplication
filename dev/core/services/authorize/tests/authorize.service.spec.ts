import 'angular-mocks';
describe('Testing my authorize service', () => {
   var AuthorizeService;
   beforeEach(angular.mock.module('app.core'));
   it('Should test authorize service test method', inject((_AuthorizeService_) => {
       expect('Hello!').toBe('Hello!'); 
   }));
});