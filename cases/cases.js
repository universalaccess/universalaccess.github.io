'use strict';

angular.module('myApp.cases', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cases', {
    templateUrl: 'cases/cases.html',
    controller: 'cases'
  });
}])

.controller('cases', [function() {

}]);