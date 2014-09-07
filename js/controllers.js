angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, friends) {
  $scope.friends = friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, friends) {
  $scope.friend = friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
