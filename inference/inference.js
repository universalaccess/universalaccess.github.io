'use strict';

angular.module('myApp.inference', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inference', {
    templateUrl: 'inference/inference.html',
    controller: 'inferenceCtrl'
  });
}])

.controller('inferenceCtrl', [function() {
  console.log('asdf');
}]);