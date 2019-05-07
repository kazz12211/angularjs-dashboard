app.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enable: true, requireBase: false});
}]);
