'use strict';

angular.module('myApp.readMyStory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/readMyStory', {
    templateUrl: 'readMyStory/readMyStory.html',
    controller: 'readMyStoryCtrl'
  });
}])

.controller('readMyStoryCtrl', [function() {

}]);
