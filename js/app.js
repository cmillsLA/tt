var app = angular.module('tt', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/index.html',
      controller: 'indexController'
    });
  /*$routeProvider.when('/search',
    {
      templateUrl: 'views/search.html',
      controller: 'search'
    });
  $routeProvider.when('/login',
    {
      templateUrl: 'views/login.html',
      controller: 'login'
    });*/
  $routeProvider.otherwise({redirectTo: '/'});
}]);

/*
$routeProvider.when('/',
  {templateUrl: 'partials/dashboard.html',
  controller: 'dashboard', resolve: { auth: function(authenticate, $route) {
  return authenticate.verifyUser($route.current.params.site);
}}});*/
/* Auth.
.factory('authenticate', ['$rootScope', '$q', '$location', '$http', 'getUserEmail', function($rootScope, $q, $location, $http, getUserEmail) {
  return {

    verifyUser: function() {
      var deferred = $q.defer();

      $http.get('/api/verify_login').
        success(function(d) {
          if(d.success == true) {
            deferred.resolve(true);
          } else {
            deferred.reject(true);
          }
        }).
        error(function(d) {
          deferred.reject(true);
        });

      return deferred.promise;

    }
  }
}]);*/