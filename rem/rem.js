'use strict';

angular.module('myApp.rem', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rem', {
    templateUrl: 'rem/rem.html',
    controller: 'rem'
  });
}])

.controller('rem', [function() {

}]);