'use strict';

/* Controllers */
myApp.controller('dataCtrl', function($scope, $http) {
    console.log("in controller");

    $scope.$watch('ngToc', function () {console.log($scope.ngToc)})

    console.log($scope)
    $scope.scrollTo = function(loc) {
            var el = document.getElementById(loc.item.id);
            $('html, body').animate({
                scrollTop: el.offsetTop
            }, 800);
        }
});


