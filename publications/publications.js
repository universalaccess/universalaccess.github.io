'use strict';

angular.module('myApp.publications', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/publications', {
    templateUrl: 'publications/publications.html',
    controller: 'publicationsCtrl'
  });
}])

.controller('publicationsCtrl', [function() {

}]);