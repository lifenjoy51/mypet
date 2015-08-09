'use strict';

angular.module('myApp.replyStory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/replyStory', {
    templateUrl: 'replyStory/replyStory.html',
    controller: 'replyStoryCtrl'
  });
}])

.controller('replyStoryCtrl', [function() {

}]);
