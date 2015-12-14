var app = angular.module("islamophobiaTrackerApp", ["ngRoute","firebase"]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: '/app/partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/signup', {
        templateUrl: '/app/partials/signup.html',
        controller: 'SignupCtrl'
      }).
      when('/incident', {
        templateUrl: '/app/partials/incident.html',
        controller: 'IncidentCtrl'
      }).
      when('/', {
        templateUrl: '/app/partials/main.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
