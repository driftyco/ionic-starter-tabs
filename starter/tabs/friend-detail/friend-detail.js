angular.module('starter.tabs.friend-detail', [])

.config(function($stateProvider) {
  $stateProvider
    .state('starter.tabs.friend-detail', {
      url: '/friends/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'starter/tabs/friend-detail/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    });
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});