// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' module is found in the services.js inside the services folder
// The 'starter.tabs' module is found in the tabs.js file located in the tabs folder
angular.module('starter', ['ionic', 'starter.tabs', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found inside its corresponding folder located in the tabs folder
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('starter', {
      url: "/starter",
      abstract: true,
      templateUrl: "starter/starter.html"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('starter/tabs/dash');

});

