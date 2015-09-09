app.controller("AlbumSongsCtrl", function($scope, $firebaseArray, $ionicSideMenuDelegate, $stateParams) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  $scope.album = $stateParams.album;

  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

});