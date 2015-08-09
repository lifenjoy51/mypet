'use strict';

angular.module('myApp.myHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myHome', {
    templateUrl: 'myHome/myHome.html',
    controller: 'myHomeCtrl'
  });
}])

.controller('myHomeCtrl', [function() {

}]);
