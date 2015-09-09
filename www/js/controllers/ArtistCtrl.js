//Get songs from firebase for Artist view

app.controller("ArtistCtrl", function($scope, $firebaseArray, $ionicSideMenuDelegate) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };

});