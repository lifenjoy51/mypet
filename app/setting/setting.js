'use strict';

angular.module('myApp.setting', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setting', {
    templateUrl: 'setting/setting.html',
    controller: 'settingCtrl'
  });
}])

.controller('settingCtrl', [function() {

}]);
