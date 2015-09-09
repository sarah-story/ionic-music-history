app.controller("SearchCtrl", function($scope, $firebaseArray, $ionicSideMenuDelegate, $http) {
  
  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);
  $scope.searchInput = "";

  $scope.querySpotify = function() {
    if ($scope.searchInput.length > 3) {
      $http.get("https://api.spotify.com/v1/search?type=track&limit=8&q=" + $scope.searchInput)
      .success(function(data) {
        $scope.results = data;
      });
    }
  }

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
    $ionicSideMenuDelegate.toggleRight();
    $scope.searchInput="";
    $scope.results=[];
  };

  $scope.cancel = function() {
    $scope.searchInput="";
    $scope.results=[];
  }

});