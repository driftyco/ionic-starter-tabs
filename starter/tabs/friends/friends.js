angular.module('starter.tabs.friends', [])

.config(function($stateProvider) {
  $stateProvider
    .state('starter.tabs.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'starter/tabs/tab-friends/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    });
})
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});