export class LoginController {
  constructor(LoginService, $state, $log, COUNTRIES, $mdDialog) {
    'ngInject';
    this.state = $state;
    this.Login = LoginService;
    this.log = $log;
    this.dialog = $mdDialog;

    this.countries = COUNTRIES.map(item => {
      item.flag = `<img src='http://flagpedia.net/data/flags/normal/${item.cc}.png'/>`;
      return item
    });

    this.country = this.countries[0];
    this.signinModel = {
      phone : '',
      password: ''
    };
    this.signupModel = {
      name: '',
      email: '',
      password: '',
      phone: ''
    };
  }

  auth(response) {
    localStorage.authToken = response.data.token;
    let {_id, name, photo} = response.data;
    localStorage.uId = _id;
    localStorage.user = JSON.stringify({_id, name, photo});
    this.dialog.hide();
    this.state.go('home');
  }

  signin() {
    let phone = `${this.country.code}${this.signinModel.phone}`;
    if (this.form1.$valid) {
      this.Login.auth(phone, this.signinModel.password)
      .then(this.auth)
      .catch(response => this.err = response.data.err);
    } else {
      this.log.debug('qwe');
    }
  }

  signup() {
    if (this.form2.$valid) {
      let {name, email, password, phone} = this.signupModel;
      phone = `${this.country.code}${phone}`;
      this.Login.signup({name, email, password, phone})
      .then(this.auth)
      .catch(response => this.err = response.data.err);
    }

  }

  showLogin() {
    this.dialog.show({
      controller: 'LoginController',
      controllerAs: 'dialog',
      templateUrl: 'app/components/login/modals/login.html',
      clickOutsideToClose:true,
      bindToController: true
    });
  }

  showSignUp() {
    this.dialog.show({
      controller: 'LoginController',
      controllerAs: 'dialog',
      templateUrl: 'app/components/login/modals/signup.html',
      clickOutsideToClose:true,
      bindToController: true
    });
  }

  hideDialog() {
    this.dialog.hide();
  }

  gPlus() {
    this.log.debug('in ctrl');
    this.Login.gPlusOAuth();
  }

  facebook() {
    this.Login.facebookOAuth();
  }
}
