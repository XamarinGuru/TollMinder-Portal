export class LoginService {
  constructor($http, $log, API, GooglePlus, Facebook) {
    'ngInject';

    this.http = $http;
    this.API = API;
    this.log = $log;
    this.oAuth = {
      gPlus: GooglePlus,
      facebook: Facebook
    };
  }

  auth(phone, password) {
    return this.http.post(`${this.API}/user/signin`, {phone, password});
  }

  signup(user) {
    return this.http.post(`${this.API}/user/signup`, user);
  }

  gPlusOAuth() {
    let authToken;
    this.oAuth.gPlus.login()
    .then(authResult => {
      this.log.debug(authResult);
      authToken = authResult.access_token;
      return this.oAuth.gPlus.getUser();
    })
    .then(user => {
      this.log.debug(user);
      return this.http({
        method: 'get',
        url: 'https://www.googleapis.com/userinfo/v2/me',
        headers: {
          'Authorization' : `Bearer ${authToken}`
        }
      });
    })
    .then(this.log.debug)
    .catch(this.log.error)
  }

  facebookOAuth() {
    this.oAuth.facebook.login((res) => this.log.debug(res));
  }
}
