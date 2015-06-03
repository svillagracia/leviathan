Leviathan.controller('AppCtrl', ['$scope', '$mdSidenav','$mdDialog','$location','$http', function($scope, $mdSidenav,$mdDialog,$location,$http){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogCtrl,
      templateUrl: '/views/auth/loginDialog.html',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
  function DialogCtrl($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
}]);