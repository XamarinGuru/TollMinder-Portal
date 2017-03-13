export function runBlock ($log, $rootScope, $state ) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', () => {
    if (!localStorage.authToken && !($state.current.name == 'termsAndConditions' || $state.current.name == 'refundPolicy'
        || $state.current.name == 'privacyPolicy')) {
      $state.go('login');
    }
  });
  $log.debug('runBlock end');
}
