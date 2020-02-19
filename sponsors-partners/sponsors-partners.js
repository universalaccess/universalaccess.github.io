'use strict';

angular.module('myApp.sponsors-partners', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sponsors-partners', {
    templateUrl: 'sponsors-partners/sponsors-partners.html',
    controller: 'sponsorsPartnersCtrl'
  });
}])

.controller('sponsorsPartnersCtrl', [function() {

}]);