export function config (
  $logProvider,
  $mdThemingProvider,
  $httpProvider,
  GooglePlusProvider,
  FacebookProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider.theme('default')
  .primaryPalette('blue-grey');

  $httpProvider.interceptors.push(authInterceptor);

  GooglePlusProvider.init({
    clientId: '897629688707-nvjhq4nkgmqej70i8icfbabjlrcbk9rh.apps.googleusercontent.com'
  });
  GooglePlusProvider.setScopes('https://www.googleapis.com/auth/plus.profile.emails.read');

  FacebookProvider.init('1140342102670154')
}

function authInterceptor() {
  return {
    request: (config) => {
      config.headers = config.headers || {};
      if (localStorage.authToken) {
        config.headers['Authorization'] = localStorage.authToken;
      }
      return config;
    }
  }
}
