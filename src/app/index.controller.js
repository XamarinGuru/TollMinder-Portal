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
    this.user = JSON.parse(localStorage.user);
    return localStorage.authToken ? true : false;
  }
}
