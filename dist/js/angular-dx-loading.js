(function () {
  'use strict';
  angular.module('dx.plugIn', []);
})();

(function () {
  'use strict';

  angular.module('dx.plugIn')
    .directive('isLoading', ['$http', 'dxLoading', function ($http, dxLoading) {
      return {
        restrict: 'A',
        scope: true,
        link: function (scope, elem) {
          scope.$watch(dxLoading.isLoading, function (inValue) {
            scope.loading = inValue;
          });
        }
      };
    }]);

})();

(function () {
  'use strict';

  angular.module('dx.plugIn')
    .factory('dxLoading', ['$http', '$rootScope', function ($http, $rootScope) {
      angular.extend($rootScope.$new(true), {loading: false});
      return {
        isLoading: $http.pendingRequests.length > 0
      }
    }]);

})();
