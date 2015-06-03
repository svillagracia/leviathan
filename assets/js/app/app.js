var Leviathan = angular.module('Leviathan',['ngRoute','ngResource','ngMaterial']);

Leviathan.run('UserService'[function(UserService){

  console.log('Leviathan is running');

  UserService.check(function(data){
    console.log(data);
  });

}]);

Leviathan.controller('AppCtrl', ['$scope', '$mdSidenav', 'UserService', '$rootScope', function($scope, $mdSidenav, UserService, $rootScope){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);

Leviathan.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvier){
  $locationProvier.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
    controller:'StaticCtrl'
  })
  .when('/weightroom',{
    templateUrl:'/views/weightroom/index.html',
    controller:'WeightRoomCtrl'
  })
  .when('/whiteboard',{
    templateUrl:'/views/whiteboard/index.html',
    controller:'WhiteBoardCtrl'
  })
  .when('/login',{
    templateUrl:'/views/auth/login.html',
    controller:'AuthCtrl'
  })
  .when('/signup',{
    templateUrl:'/views/auth/signup.html',
    controller:'AuthCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  });
}]);