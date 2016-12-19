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
<<<<<<< HEAD
    this.user = localStorage.user ? JSON.parse(localStorage.user) : false
    return this.user;
=======
    this.user = localStorage.user ? JSON.parse(localStorage.user) : null;
    return localStorage.authToken ? true : false;
>>>>>>> 4dd112f0f6ad688c3897aa13d9cd0753c72cc3fe
  }
}
