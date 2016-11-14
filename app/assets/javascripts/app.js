var app = angular.module("AngularApp", ["ngRoute", "templates"]); 
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html"
    })
    .when("/style_demo", {
      templateUrl : "style_demo.html"
    })    
    .otherwise({
        redirectTo: 'public/404'
    });
    // user the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
