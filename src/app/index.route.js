export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode({enabled: true});
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
    })
    .state('privacyPolicy', {
      url: '/privacyPolicy',
      templateUrl: 'app/components/privacyPolicy/view.html'
    })
    .state('refundPolicy', {
      url: '/refundPolicy',
      templateUrl: 'app/components/refundPolicy/view.html'
    })
    .state('termsAndConditions', {
      url: '/termsAndConditions',
      templateUrl: 'app/components/termsAndConditions/view.html'
    })
    .state('payment', {
      url: '/payment',
      templateUrl: 'app/components/payment/view.html',
      controller: 'PaymentController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
}
