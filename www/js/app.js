var app = angular.module('MusicApp', ['ionic', 'angular.filter', 'firebase', 'angucomplete-alt']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/songs');

  $stateProvider.state('home', {
    url: '/songs',
    templateUrl: 'partials/song-list.html',
    controller: 'SongCtrl'
  }).state('detail', {
    url: '/song/:song',
    templateUrl: 'partials/song-detail.html',
    controller: 'DetailCtrl'
  }).state('artists', {
    url: '/artists',
    templateUrl: 'partials/artists.html',
    controller: 'ArtistCtrl'
  }).state('albums', {
    url: '/albums',
    templateUrl: 'partials/albums.html',
    controller: 'AlbumCtrl'
  }).state('artistSongs', {
    url: '/artists/:artist',
    templateUrl: 'partials/artist-songs.html',
    controller: 'ArtistSongsCtrl'
  }).state('albumSongs', {
    url: '/albums/:album',
    templateUrl: 'partials/album-songs.html',
    controller: 'AlbumSongsCtrl'
  });
});
