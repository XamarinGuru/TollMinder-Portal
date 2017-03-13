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
    clientId: '596186305106-cl3gh4einedu8fbe3upcmkoanc3284ac.apps.googleusercontent.com',
    apiKey: 'AIzaSyBSZHGOQA4JvBopP9-IPn2EORedB7MIJNc'
  });
  GooglePlusProvider.setScopes('https://www.googleapis.com/auth/plus.profile.emails.read');

  FacebookProvider.init('366792763673023')
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
