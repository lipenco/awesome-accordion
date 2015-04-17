

;(function() {

  angular
    .module('boilerplate')
    .controller('awesomeAccordionCtrl', awesomeAccordionCtrl);

  awesomeAccordionCtrl.$inject = ['$scope', '$rootScope', '$http'];


  function awesomeAccordionCtrl($scope, $timeout, $http) {

    $http.get('./json.json').
    success(function(data, status, headers, config) {
      // set up number of items for each category
      groups = data.groups.group
      groups.map(function(object, i) {
        object.range = _.range(1, Math.floor((Math.random() * 10) + 2));
        object.height = parseInt(object.range.length) * 37 + 110
      })
      $scope.groups = groups
    }).
    error(function(data, status, headers, config) {
      alet("something went wrong with data load");
    });

  }






})();
