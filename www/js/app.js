// Ionic Starter App

var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  
  // Este método é executado na primeira vez q o app roda
  
  // Um estado para cada tela
  $stateProvider.state('lista', {
    url: '/lista',
    templateUrl: 'templates/lista.html'
  });
  
  $urlRouterProvider.otherwise('/lista');
  
});
