'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
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
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/main'});
}]);

myApp.directive('ngTocTarget', function() {
    return {
        link: function(scope, elem, attrs) {

            attrs.ngTocTarget = attrs.ngTocTarget || 'h1, h2, h3';
            scope.ngToc = [];
            var runningList = [];
            var targetElements = attrs.ngTocTarget.toLowerCase().replace(/ /g,'').split(',');
            var index = 0;

            angular.forEach(elem.children(), function(obj) {
                var el = angular.element(obj)[0];
                var elType = el.nodeName.toLowerCase();

                //if the element's children match the target elements
                if (targetElements.indexOf(elType) > -1) {
                    var add = {};
                    add.el = elType;
                    add.contents = el.innerText;

                    var elementId = el.innerText.replace(/ /g,'_');

                    var isMatchIndex = runningList.indexOf(add.contents);
                    var countIndex = isMatchIndex+1;
                    runningList.push(el.innerText);
                    runningList.push(0);

                    if (isMatchIndex > -1) {
                        runningList[countIndex] = runningList[countIndex] +1;
                    }

                    if (runningList[countIndex] > 0) {
                        angular.element(el).attr('id', elementId + '_' + runningList[countIndex]);
                        add.id = elementId + '_' + runningList[countIndex];
                    } else {
                        angular.element(el).attr('id', elementId);
                        add.id = elementId;
                    }

                    scope.ngToc.push(add);
                    index++;

                    console.log(JSON.stringify(scope.ngToc));

                }
            });
        }
    };
});
