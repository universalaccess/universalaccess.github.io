'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.main',
    'myApp.team',
    'myApp.rem',
    'myApp.publications',
    'myApp.cases',
    'myApp.inference',
    'myApp.sponsors-partners',
    'myApp.about',
    'myApp.regulation',
    'myApp.version'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/main'});
}]);
