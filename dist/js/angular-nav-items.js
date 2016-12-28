(function () {
  'use strict';
  angular.module('dx.plugIn', []);
})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxNavItem', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="nx-widget-nav-item" data-active="{{item.active}}" ng-transclude></div>',
        link: linkFn
      };


      function linkFn(scope, element, attrs) {
        element.bind('click', function () {
          scope.$emit('itemClick', scope);
          scope.$apply();
        })
      }

    }]);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxNavItems', ['$timeout', function ($timeout) {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="nx-widget-nav-items {{cssClass}}" ng-transclude></div>',
        scope: {
          items: '=',
          select: '&',
          activeIndex: '=',
          cssClass: '@'
        },
        link: linkFn,
        controller: controllerFn
      };

      function linkFn(scope, element, attrs) {

        scope.select = attrs.select ? scope.select() : select;

        if (!angular.isDefined(scope.activeIndex)) {
          scope.activeIndex = 0;
        }

        scope.$on('itemClick', function (inEvent, inArgs) {
          scope.select(inArgs.item);
          console.log(JSON.stringify(inArgs.item));
        });


        function select(inItem) {
          angular.forEach(scope.items, function (item, index) {
            if (angular.equals(item, inItem)) {
              scope.activeIndex = index;
            }
            item.active = false;
          });
          inItem.active = true;
        }
      }

      function controllerFn($scope) {

        $scope.$watch('items', function (inItems) {
          if (inItems) {
            if (inItems.length > 0) {
              setActive();
            }
          }
        });

        $scope.$watch('activeIndex', function (inValue) {
          if (inValue !== -1) {
            setActive();
          } else {
            reset();
          }
        });

        function reset() {
          var items = $scope.items;
          items.forEach(function (item, index) {
            item.active = false;
          });
          $scope.activeIndex = -1;
        }

        function setActive() {
          var items = $scope.items;
          var activeIndex = $scope.activeIndex;
          if (items.length > 0 && activeIndex !== -1) {
            items.forEach(function (item, index) {
              item.active = index === activeIndex;
            });
          }
        }

      }

    }]);


})();
