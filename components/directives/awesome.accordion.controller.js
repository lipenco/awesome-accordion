

;(function() {

  angular
    .module('boilerplate')
    .controller('awesomeAccordionCtrl', awesomeAccordionCtrl);

  awesomeAccordionCtrl.$inject = ['$scope', '$rootScope', '$http'];


  function awesomeAccordionCtrl($scope, $timeout, $http) {

    $http.get('./json.json').
    success(function(data, status, headers, config) {
      groups = data.groups.group
      groups.map(function(object, i) {
        object.range = _.range(1, Math.floor((Math.random() * 10) + 2));
        object.height = object.range * 35 + 50
      })
      $scope.groups = groups
      console.log($scope.groups)
    }).
    error(function(data, status, headers, config) {
      console.log(data)
    });

  }






})();
