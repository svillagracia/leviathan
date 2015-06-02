Leviathan.controller('WeightRoomCtrl',['$scope','$http',function($scope,$http){
  console.log('Weight Room Controller Loaded!');

  $http.get('/api/weightroom').success(function(data){
    $scope.articles = data;
    console.log('$scope.articles is: ',$scope.articles);
  });
}]);