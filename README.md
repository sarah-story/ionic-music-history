#Music History App

This is an iphone/android app I created using the [Ionic](http://ionicframework.com/) framework. Ionic is based on angular, so most of the code comes from [angular-music-history](http://github.com/sarah-story/angular-music-history). The app can be viewed at http://sarah-story.github.io/ionic-music-history

###Functionality

This is a basic music library app that allows the user to add and remove songs to a list. The list of songs can be viewed by artist, album, or track, and clicking on a track brings up a detail view. Unfortunately, the app doesn't actually play any music. 

All of the user's song data is stored in firebase, and the song suggestions that populate when the user adds a song come from the Spotify API.

##Getting Started

#####Clone the repo

```
git clone https://github.com/sarah-story/ionic-music-history.git
```

#####Install dependencies

``` 
cd ./ionic-music-history/
bower install
```

#####To view app in browser:

```
ionic serve
```

#####To build and emulate app in ios:

```
ionic platform add ios
ionic build ios
ionic emulate ios
```

#####To build and emulate app in android:

```
ionic platform add android
ionic build android
ionic emulate android
```

