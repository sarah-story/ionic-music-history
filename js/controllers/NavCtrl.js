app.controller("NavCtrl", ["$scope", "$ionicSideMenuDelegate", function($scope$ionicSideMenuDelegate) {
  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

}]);