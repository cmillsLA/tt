'use strict';

(function() {

  var indexController = function ($scope, userService) {
    // Static test data.
    $scope.userId = 12345;
    $scope.trips = userService.getTrips();
    $scope.msgs = userService.getMsgs();
  };
    
  indexController.$inject = ['$scope', 'userService'];

  angular.module('tt')
    .controller('indexController', indexController);
    
}());