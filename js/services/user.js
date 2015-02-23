(function() {
  var userService = function() {
        // Static test data.
        var testDate = new Date();

        testDate = (testDate.getMonth() + 1) + '/' + testDate.getDate() + '/' + testDate.getFullYear();

        this.getTrips = function() {
          var trips = [
            {
              id: 5555,
              userId: 12345,
              name: 'Custom Trip Name',
              startDate: testDate,
              endDate: testDate,
              loc: 'lat|lng',
              friends: [1243, 3433, 5454]
            },
            {
              id: 5556,
              userId: 12345,
              name: 'Another trip',
              startDate: testDate,
              endDate: testDate,
              loc: 'lat|lng',
              friends: null
            },
            {
              id: 5557,
              userId: 12345,
              name: 'Third Trip',
              startDate: testDate,
              endDate: testDate,
              loc: 'lat|lng',
              friends: null
            }
          ];
          return trips;
        };

        this.getMsgs = function() {
          var msgs = [
            {
              id: 12345678,
              userId: 12345,
              exerpt: 'test',
              from: 67890,
              userThumb: '/img/12345_thumb.jpg',
              trip: 'Custom trip name'
            },
            {
              id: 12345679,
              userId: 12345,
              exerpt: 'test 2',
              from: 11121,
              userThumb: '/img/12345_thumb.jpg',
              trip: 'Third Trip'
            }
          ];
          return msgs;
        };
  };
    
  angular.module('tt').service('userService', userService);
                                           
}());