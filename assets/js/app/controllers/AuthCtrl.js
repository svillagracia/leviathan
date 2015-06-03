Leviathan.controller('AuthCtrl',['$scope','$location','$http',function($scope,$location,$http){

  console.log('Auth Controller Loaded!');

  $scope.formData = {
    username: null,
    email: null,
    password: null
  };

  $scope.userloggedin = false;

  $scope.logIn = function(provider, identifier, password){
   if(provider === null){
     $http.post('/auth/local', {identifier: identifier, password: password})
     .success(function(data){
       if(data.success === true){
          $scope.error = false;
          $scope.userloggedin = true;
          $location.path('/whiteboard');
        }else{
         $scope.error = true;
        }
     })
     .error(function(data){
       console.log('Error',data);
     });
   }else{
     location.href = '/auth/'+provider;
     $scope.userloggedin = true;
     }
  };

  $scope.register = function(){
    $http.post('/auth/local/register', {username: $scope.formData.username, email: $scope.formData.email, password: $scope.formData.password})
    .success(function(data){
      $scope.logIn(null,$scope.formData.username,$scope.formData.password);
    });
  };

  $scope.logout = function(){
    $http.delete('/auth/local',{username:username, password:password})
    .success(function(data){
      console.log(data);
    });
  };

}]);