var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'userController'
        })
        .when('/dash', {
            templateUrl: 'partials/dash.html',
            controller: 'userController'
        })
        .when('/user/:id', {
            templateUrl: 'partials/user.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/login'
        })

})
