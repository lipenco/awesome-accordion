
;(function() {

  'use strict';

  angular
    .module('boilerplate')
    .directive('scrollto', scrollto);

    function scrollto($window, $timeout) {
      var scrollPaneHeight;

      function init(element) {

        var container = element;
        var scrollPane = angular.element(container);
        scrollPane.css('height', $(window).height())
        scrollPaneHeight = scrollPane.height();

        var $this = $(container)

        $timeout(function() {
          filterViewport()
        }, 100);

        $this.scroll(function(e) {
            filterViewport()

        });

      };

      function elementInViewport(el) {
        el = $(el)
        var top = el.offset().top;
        var height = el.offset().top + el.data('height');

        return (
          top < (window.pageYOffset + window.innerHeight) &&
          (top + height) > (window.pageYOffset + el.data('height'))
        );
      }

      function openInViewport(filtered) {
        var cumulatedHeight = 0;
        filtered.each(function(i, el) {
          var sum = cumulatedHeight + $(el).data('height')
          if (sum >= scrollPaneHeight) {
            cumulatedHeight = scrollPaneHeight
            return
          } else {
            cumulatedHeight = sum
            $(el).find('input').prop('checked', true);
          }
        })

      }

      function filterViewport() {
        $('.element').find('input').prop('checked', false);
        var filtered = $('.element').filter(function( index ) {
          return elementInViewport($('.element').get(index))
        })
        openInViewport(filtered)
      };

      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          init(element);
          $( window ).resize(function() {
            init(element);
          });
        }
      };
  }

})();
