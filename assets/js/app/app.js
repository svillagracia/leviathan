<<<<<<< HEAD
var Leviathan = angular.module('Leviathan',['ngRoute','ngResource','ngMaterial']);
=======
var Leviathan = angular.module('Leviathan',['ngRoute','ngResource']);
>>>>>>> 78c3776d68b2801f8abc25b6e01c21c01c259b66

Leviathan.run([function(){
  console.log('Leviathan is running');
}]);

<<<<<<< HEAD
Leviathan.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);

=======
>>>>>>> 78c3776d68b2801f8abc25b6e01c21c01c259b66
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
  .otherwise({
    templateUrl:'/views/404.html'
  });
}]);