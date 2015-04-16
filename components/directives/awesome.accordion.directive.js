;(function() {

  'use strict';

  angular
    .module('boilerplate')
    .directive('awesomeAccordion', awesomeAccordion);

  function awesomeAccordion() {


    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/awesome-accordion.html',
      controller: 'awesomeAccordionCtrl'
    };

    return directiveDefinitionObject;
  }

})();
