app.controller("SearchCtrl", function($scope, $firebaseArray, $ionicSideMenuDelegate, $http, $ionicSideMenuDelegate) {
  
  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);
  $scope.searchInput = "";


  //When the user enters a search term into the input box, a query is sent to the spotify api
  $scope.querySpotify = function() {
    if ($scope.searchInput.length > 3) {
      $http.get("https://api.spotify.com/v1/search?type=track&limit=8&q=" + $scope.searchInput)
      .success(function(data) {
        $scope.results = data;
      });
    }
  }

  //Add the selected track to firebase
  $scope.addSong = function(track) {
    $scope.songs.$add({
      album: track.album.name,
      artist: track.artists[0].name,
      title: track.name, 
      image: track.album.images[0].url,
      spotifyTrackId: track.id,
      spotifyAlbumId: track.album.id,
      spotifyArtistId: track.artists[0].id
    });

    //close search box and clear input and results
    $ionicSideMenuDelegate.toggleRight();
    $scope.searchInput="";
    $scope.results=[];
  };

  //clear input and results when cancel button is clicked
  $scope.cancel = function() {
    $scope.searchInput="";
    $scope.results=[];
  }

});