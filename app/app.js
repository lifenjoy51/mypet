'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.myHome', // 나의집.
  'myApp.writeMyStory', // 내 이야기 쓰기.
  'myApp.readMyStory',  // 내 이야기 읽기.
  'myApp.petSquare',  // 애완동물 광장.
  'myApp.replyStory', // 이야기 읽기.
  'myApp.setting',  // 설정.
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/myHome'});
}]);
