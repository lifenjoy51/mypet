'use strict';

angular.module('myApp.petSquare', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/petSquare', {
    templateUrl: 'petSquare/petSquare.html',
    controller: 'petSquareCtrl'
  });
}])

.controller('petSquareCtrl', ['$scope', function($scope) {

  $scope.pets = {
    '1' :   {
            'content' : 'test1'
            ,'selected' : false
            ,'top' : '50vh'
            ,'left' : '20vh'
            ,'contentTop' : '20vh'
            ,'contentLeft' : '5vh'
            ,'url' : 'img/corgi.gif'
          }
    , '2' : {
            'content' : 'test 222'
            ,'selected' : false
            ,'top' : '80vh'
            ,'left' : '40vh'
            ,'contentTop' : '50vh'
            ,'contentLeft' : '25vh'
            ,'url' : 'img/shiba.png'
          }
  };

  $scope.displayPopup = function(e){
    console.log($scope.pets[e]);
    $scope.pets[e].selected = ($scope.pets[e].selected == true) ? false : true;
  }
}]);
