export class RootController {
  constructor($state, $log) {
    'ngInject';
    this.state = $state;
    this.log = $log;
  }

  logout() {
    localStorage.authToken = '';
    this.state.go('login');
  }

  isAuth() {
    this.user = localStorage.user ? JSON.parse(localStorage.user) : false
    return this.user;
  }
}
