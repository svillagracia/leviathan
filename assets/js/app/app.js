var Leviathan = angular.module('Leviathan',['ngRoute','ngResource','ngMaterial']);

Leviathan.run([function(){
  console.log('Leviathan is running');
}]);

Leviathan.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
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
  .otherwise({
    templateUrl:'/views/404.html'
  });
}]);