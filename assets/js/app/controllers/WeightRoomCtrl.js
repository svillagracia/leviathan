Leviathan.controller('WeightRoomCtrl',['$scope','$http',function($scope,$http){
  console.log('Weight Room Controller Loaded!');

  $http.get('/api/weightroom').success(function(data){
    console.log('Locals is: ',data);
    $scope.articles = data[0].data.children;
  });
}]);