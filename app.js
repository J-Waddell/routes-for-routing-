console.log("app shit");

// making app
let app = angular.module('routingApp', ['ngRoute'])

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            controller: 'ThirCtrl',
            templateUrl: 'partials/fp.html'
        })
        .when('/main', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/list', {
            controller: 'SecCtrl',
            templateUrl: 'partials/list.html'
        })
        .otherwise( {
            controller: 'FourCtrl',
            templateUrl: 'partials/error.html'
        })
})

// controller
app.controller('MainCtrl', function($scope) {
    $scope.highwayName="Pacific Coast Highway"
    $scope.highwayDescription="One of the most breathtaking drives in the country, the Pacific Coast Highway is definitely a bucket-list worthy scenic drive."
})

app.controller('SecCtrl', function($scope) {
    $scope.highwayName="US Highway 1"
    $scope.highwayDescription="follow U.S. Highway 1 down the coast of Florida for an Atlantic coast drive like no other. This scenic drive will land you in Key West, the southernmost point in the Continental U.S.!"
})

app.controller('ThirCtrl', function($scope) {
    $scope.highway1="http://localhost:8080/#!/main"
    $scope.highway2="http://localhost:8080/#!/list"
})

app.controller('FourCtrl', function($scope) {
    $scope.errorMessage="NO RESULTS, IDIOT<3 -Dwight K. Shrut"
})