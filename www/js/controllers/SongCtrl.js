app.controller("SongCtrl", ["$scope", "$firebaseArray", "$ionicSideMenuDelegate", function($scope, $firebaseArray, $ionicSideMenuDelegate) {

  //Get songs from firebase
  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  //Can swipe any song right to reveal delete button
  $scope.listCanSwipe = true;

  $scope.deleteSong = function(song) {
    console.log(song.$id);
    $scope.songs.$remove(song);
  };

  //Show right side menu
  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

}]);