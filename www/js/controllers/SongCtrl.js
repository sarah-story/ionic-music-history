app.controller("SongCtrl", ["Auth", "$scope", "$firebaseArray", "$ionicSideMenuDelegate", function(Auth, $scope, $firebaseArray, $ionicSideMenuDelegate) {

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

  $scope.login = function(authMethod) {
    Auth.$authWithOAuthRedirect(authMethod).then(function(authData) {
    }).catch(function(error) {
      if (error.code === 'TRANSPORT_UNAVAILABLE') {
        Auth.$authWithOAuthPopup(authMethod).then(function(authData) {
        });
      } else {
        console.log(error);
      }
    });
  };

  Auth.$onAuth(function(authData) {
    if (authData === null) {
      console.log('Not logged in yet');
    } else {
      console.log('Logged in as', authData.uid);
    }
    // This will display the user's name in our view
    $scope.authData = authData;
  });

}]);