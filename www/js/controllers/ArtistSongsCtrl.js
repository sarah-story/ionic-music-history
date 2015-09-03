app.controller("ArtistSongsCtrl", function($scope, $firebaseArray, $ionicSideMenuDelegate, $stateParams) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  $scope.artist = $stateParams.artist;

  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

});