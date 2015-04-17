
;(function() {

  'use strict';

  angular
    .module('boilerplate')
    .directive('scrollto', scrollto);

    function scrollto($window, $timeout) {

      var settings = {
        container: '.menu',
        scrollTo: angular.element(),
        offset: 0,
        duration: 150,
        easing: 'swing'
      };
      var scrollPane = angular.element(settings.container);
      scrollPane.css('height', $(window).height())
      var scrollPaneHeight = scrollPane.height();
      var isScrolling = false;


      function init() {

        var $this = $(settings.container), self = this;

        $this.scroll(function(e) {
          if (!isScrolling) {
            openFirst()
          }

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

      function openFirst() {
        $('.element').find('input').prop('checked', false);
        var filtered = $('.element').filter(function( index ) {
          return elementInViewport($('.element').get(index))
        })
        openInViewport(filtered)
      };

      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          init();
        }
      };
  }

})();
