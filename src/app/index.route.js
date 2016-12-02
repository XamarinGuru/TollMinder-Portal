export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.html5Mode = true;
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'app/components/login/view.html',
    controller: 'LoginController',
    controllerAs: 'ctrl'
  })
  .state('home', {
    url: '/',
    templateUrl: 'app/components/home/view.html',
    controller: 'HomeController',
    controllerAs: 'ctrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'app/components/settings/view.html',
    controller: 'SettingsController',
    controllerAs: 'ctrl'
  })
  .state('paymentHistory', {
    url: '/paymentHistory',
    templateUrl: 'app/components/paymentHistory/view.html',
    controller: 'PaymentHistoryController',
    controllerAs: 'ctrl'
  });


  $urlRouterProvider.otherwise('/');
}
