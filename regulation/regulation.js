'use strict';

angular.module('myApp.regulation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/regulation', {
    templateUrl: 'regulation/regulation.html',
    controller: 'regulationCtrl'
  });
}])

.controller('regulationCtrl', [function() {

}]);