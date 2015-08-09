'use strict';

angular.module('myApp.writeMyStory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/writeMyStory', {
    templateUrl: 'writeMyStory/writeMyStory.html',
    controller: 'writeMyStoryCtrl'
  });
}])

.controller('writeMyStoryCtrl', [function() {

}]);
