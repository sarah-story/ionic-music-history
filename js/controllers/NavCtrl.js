app.controller("SongCtrl", ["$scope", "$ionicSideMenuDelegate", function($scope$ionicSideMenuDelegate) {
  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

}]);