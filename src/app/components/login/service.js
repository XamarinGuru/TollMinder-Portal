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
    return new Promise((resolve, reject) => {
      let u;
      this.oAuth.gPlus.login()
        .then(authResult => this.oAuth.gPlus.getUser())
        .then(user => {
          let {email, name, picture} = user;
          u = {facebookId: null, email, source: 'gplus', name};
          return this.http.post(`${this.API}/user/oauth`, u)
        })
        .then(resolve)
        .catch(_ => reject(u));
    })

  }

  facebookOAuth() {
    return new Promise((resolve, reject) => {
      this.oAuth.facebook.getLoginStatus(resp => {
        if (resp.status == 'connected') {
          return new Promise((res, rej) => {
          this.oAuth.facebook.api('/me', function (data) {
            console.log(data);
            data.source = "facebook";
            res(data)
          });
          }).then(u => {
            return this.http.post(`${this.API}/user/oauth`, u)
            .then(resolve)
            .catch(_ => reject(u));
          }).catch((u) => reject(u));

          //return this.http.post(`${this.API}/user/oauth`, {email, name,})
        } else {
          this.oAuth.facebook.login(_ => {
            this.oAuth.facebook.api('/me', (u) => {
              u.source = "facebook";
              this.http.post(`${this.API}/user/oauth`, u).then(resolve).catch(_ => reject(u))
            });
          });

        }
      })
    });

  }
}
