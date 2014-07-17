angular.module('starter.tabs.account', [])

.config(function($stateProvider) {
  $stateProvider
    .state('starter.tabs.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'starter/tabs/tab-account/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });
})
.controller('AccountCtrl', function($scope) {

});