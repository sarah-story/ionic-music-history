app.controller("SongCtrl", function($scope, $firebaseArray, $ionicSideMenuDelegate) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  $scope.listCanSwipe = true;

  $scope.deleteSong = function(song) {
    console.log(song.$id);
    $scope.songs.$remove(song);
  };

  $scope.leftMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

});