angular.module('starter.tabs', [
  'starter.tabs.dash',
  'starter.tabs.friends',
  'starter.tabs.account',
  'starter.tabs.friend-detail'
])
.config(function($stateProvider) {

  // setup an abstract state for the tabs directive
  $stateProvider
    .state('starter.tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'starter/tabs/tabs.html'
    });
});