export class RootController {
  constructor($state, $log) {
    'ngInject';
    this.state = $state;
    this.log = $log;
  }

  logout() {
    localStorage.authToken = '';
    localStorage.signUpedUser = null;
    localStorage.user = '';
    this.state.go('login');
  }

  isAuth() {
    this.user = localStorage.user ? angular.fromJson(localStorage.user) : false;
    return localStorage.authToken ? true : false;
  }
}
