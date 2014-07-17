angular.module('starter.tabs.dash', [])

.config(function($stateProvider) {
  $stateProvider
    .state('starter.tabs.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'starter/tabs/tab-dash/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    });
})
.controller('DashCtrl', function($scope) {

});