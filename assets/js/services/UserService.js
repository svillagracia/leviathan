Leviathan.factory('UserService',['$http',function($http){

  return {

    check: function(callback) {

     var self = this;

      $http.get('/api/auth')
      .success(function(data){
        if(data && data.user) {
          self.currentUser = data.user;
        } else {
          self.currentUser = false;
        }
        callback(null, data);
      })
      .error(function(err){
        callback(err);
      });

    },
  };

}]);