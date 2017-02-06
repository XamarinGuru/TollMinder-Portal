export class LoginController {
  constructor(LoginService, $state, $log, COUNTRIES, $mdDialog) {
    'ngInject';
    this.state = $state;
    this.Login = LoginService;
    this.log = $log;
    this.dialog = $mdDialog;
    this.err = '';

    this.countries = COUNTRIES.map(item => {
      item.flag = `<img src='http://flagpedia.net/data/flags/normal/${item.cc}.png'/>`;
      return item
    });

    this.country = this.countries[0];
    this.signinModel = {
      phone: '',
      password: ''
    };
    this.signupModel = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
      facebookId: ''
    };
    this.oauthModel = {
      phone: ''
    }
  }

  auth(response) {
    console.dir(response);
    localStorage.authToken = response.data.token;
    let {_id, name, photo, phone} = response.data;
    localStorage.uId = _id;
    localStorage.user = JSON.stringify({_id, name, photo, phone});
    this.dialog.hide();
    this.state.go('home');
  }

  authFB(response) {
    console.dir(response);
    localStorage.authToken = response.data.token;
    let {facebookId, name, _id} = response.data;
    localStorage.uId = _id;
    localStorage.user = JSON.stringify({_id, name});
    this.dialog.hide();
    this.state.go('home');
  }


  signin() {
    let phone = `${this.country.code}${this.signinModel.phone}`;
    if (this.form1.$valid) {
      this.Login.auth(phone, this.signinModel.password)
        .then(response => this.auth(response))
        .catch(response => this.err = response.data.err);
    } else {
      this.log.debug('qwe');
    }
  }

  oauthSignUp() {
    if (this.form3.$valid) {



      let user = JSON.parse(localStorage.signUpedUser);
      console.log(user);
      user.facebookId = user.id;
      if (user.name) {

        let nameParts = user.name.split(" ");
        user.firstname = nameParts[0];
        user.lastname = nameParts[1];
        console.log(nameParts);
      }
      user.phone = `${this.country.code}${this.oauthModel.phone}`;
      this.Login.signup(user)
        .then(res => {
          if (res.facebookId) {
            this.authFB(res)
          }
          else this.auth(res)
        })
        .catch(err => {
          if (err.status === 302) {
            this.dialog.hide();
            return this.dialog
              .show(
                this.dialog.alert()
                  .textContent('This user has already been registered using phone and password')
                  .title('Error!')
                  .ok('Ok')
              );
          }
        })
    }
  }

  signup() {
    if (this.form2.$valid) {
      let {firstname, lastname, email, password, phone, facebookId} = this.signupModel;
      phone = `${this.country.code}${phone}`;
      this.Login.signup({firstname, lastname, email, password, phone, facebookId})
        .then(response => {
          if (facebookId) {
            this.authFB(response);
          }
          this.auth(response);
        })
        .catch(response => this.err = response.data.err);
    }

  }

  showLogin() {
    this.dialog.show({
      controller: 'LoginController',
      controllerAs: 'dialog',
      templateUrl: 'app/components/login/modals/login.html',
      clickOutsideToClose: true,
      bindToController: true
    });
  }

  showSignUp() {
    this.dialog.show({
      controller: 'LoginController',
      controllerAs: 'dialog',
      templateUrl: 'app/components/login/modals/signup.html',
      clickOutsideToClose: true,
      bindToController: true
    });
  }

  showPhoneDialog() {
    this.dialog.show({
      controller: 'LoginController',
      controllerAs: 'dialog',
      templateUrl: 'app/components/login/modals/phone.html',
      clickOutsideToClose: true,
      bindToController: true,
    })
  }

  hideDialog() {
    this.dialog.hide();
  }

  gPlus() {
    this.log.debug('in ctrl');
    this.Login.gPlusOAuth()
      .then(res => this.auth(res))
      .catch(u => {
        localStorage.signUpedUser = JSON.stringify(u);
        this.showPhoneDialog()
      })
  }

  facebook() {
    this.Login.facebookOAuth()
      .then(user => {

        this.authFB(user);
      })
      .catch(
        u => {
          localStorage.signUpedUser = JSON.stringify(u);
          console.log(u);
          this.showPhoneDialog();
        })
  }
}
