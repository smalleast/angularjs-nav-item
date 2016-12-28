#angular-isloading
AngularJS directive that provide `a boolean value` to know $http hasn&#39;t had a response or not.


##usage:
+ bower install `angular-isloading`
+ css part:
```css
body {
  font-family: 'STHeiti', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.loading-widget {
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

.loading-widget,
.loading-widget[data-visible] {
  display: none;
}

.loading-widget[data-visible=true] {
  display: block;
}

.loading-widget img {
  width: 100%;
  height: 100%;
}
```
+ html part:
```html
<div class="loading-widget"
     isloading
     loading="loading"
     data-visible="{{loading}}"
>
  <img src="svg/default.svg" alt="">
</div>

```
+ javascript part:
```javascript
angular.module('TestApp', ['nx.widget']);

  angular.module('TestApp').
    controller('MainCtrl', function ($http, $q, $rootScope) {
      //Solution 1:Use loading element to show the loading indicator
      $rootScope.loading = false;
      var s1 = $http.get('http://www.baidu.com');
      var s2 = $http.get('http://www.sina.com');
      var s3 = $http.get('http://www.163.com');
      var s4 = $http.get('http://www.qq.com');
      var s5 = $http.get('http://www.hao123.com');

      //you need a svn if you're a chinese
      var s6 = $http.get('https://www.google.com/');


      $q.all([s1, s2, s3, s4, s5]).then(function (responses) {
        console.log(responses);
      })


    })
    .controller('MainCtrl2', function ($http, $q, $rootScope, nxIsLoading) {
      //Solution 2:Or you can directly watch nxIsLoading.isLoading method:
      $rootScope.$watch(nxIsLoading.isLoading,function(inValue){
        $rootScope.loading = inValue;
      });

      var s1 = $http.get('http://www.baidu.com');
      var s2 = $http.get('http://www.sina.com');
      var s3 = $http.get('http://www.163.com');
      var s4 = $http.get('http://www.qq.com');
      var s5 = $http.get('http://www.hao123.com');

      //you need a svn if you're a chinese
      var s6 = $http.get('https://www.google.com/');


      $q.all([s1, s2, s3, s4, s5]).then(function (responses) {
        console.log(responses);
      })

    });

```

+ description:

  -      isloading                  `<!--1.attach the directive-->`
  -      loading="loading"          `<!--2.write the scope.loading to the app.$rootScope-->`
  -      data-visible="{{loading}}" `<!--2.read loading props for CSS-->`


##resources:
+ http://g00glen00b.be/fun-angularjs-http-loading-indicator/
+ http://stackoverflow.com/questions/15529496/a-way-to-know-when-angular-http-is-requesting/37271737
