#angular-nav-items
AngularJS directive used to build abstract active items.

##usage:
+ html part:
```html

<nx-nav-items items="items" active-index="activeIndex" css-class="header">
  <nx-nav-item ng-repeat="item in items">{{item.title}}</nx-nav-item>
</nx-nav-items>

<nx-nav-items items="items1" active-index="activeIndex" css-class="body">
  <nx-nav-item ng-repeat="item in items1">qeqwewq{{item.content}}</nx-nav-item>
</nx-nav-items>

```

+ javascript part:
```javascript
var TestModule = angular.module('TestApp', ['nx.widget'])
    .controller('MainCtrl', function ($scope) {
      $scope.activeIndex = 2;
      $scope.items = [
        {
          title: 'Tab1',
          active: true
        },
        {
          title: 'Tab2',
          active: false
        },
        {
          title: 'Tab3',
          active: false
        }
      ];

      $scope.items1 = [
        {
          content: 'content1',
          active: true
        },
        {
          content: 'content2',
          active: false
        },
        {
          content: 'content3',
          active: false
        }
      ];


    });
```


