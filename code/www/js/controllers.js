angular.module('songhop.controllers', ['ionic', 'songhop.services'])


/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope) {
  $scope.songs = [
     {
        "title":"Basket Case",
        "artist":"Greenday",
        "image":"http://i.imgur.com/PzlkBbu.jpg",
     },
     {
        "title":"Coming Back to Life",
        "artist":"Pink Floyd",
        "image":"http://i.imgur.com/8qK2gav.jpg",
     },
     {
        "title":"Never Gonna Give You Up",
        "artist":"Rick Astley",
        "image":"http://i.imgur.com/8q4Ftw0.jpg",
     }
  ];
  $scope.currentSong = angular.copy($scope.songs[0]);

  // fired when we favorite / skip a song.
  $scope.sendFeedback = function (bool) {

    // set the current song to one of our three songs
    var randomSong = Math.round(Math.random() * ($scope.songs.length - 1));

    // update current song in scope
    $scope.currentSong = angular.copy($scope.songs[randomSong]);

  }

})


/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope) {

})


/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope) {

});
