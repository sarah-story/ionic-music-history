//Get individual song data for detail view

app.controller("DetailCtrl", function($scope, $firebaseObject, $stateParams) {
  var id = $stateParams.song;

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.song = $firebaseObject(songRef.child(id));

});