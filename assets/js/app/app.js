var Leviathan = angular.module('Leviathan',['ngRoute','ngResource']);

Leviathan.run([function(){
  console.log('Leviathan is running');
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
  .otherwise({
    templateUrl:'/views/404.html'
  });
}]);