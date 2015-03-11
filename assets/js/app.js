angular.module('website', [])

.controller('MainCtrl', ['$scope', function($scope) {
  $scope.about = false;
  $(document).scrollTop(0);
  $('.tip').tipr();

  $scope.showAbout = function($event) {
    $event.preventDefault();
    $scope.about = true;

    $(this).fadeOut('fast');

    $(".toppadd").hide();
  }

}])

.directive('commitList', ['$http', function($http) {
  return {
    templateUrl: './assets/js/templates/commit-list.html',
    restrict: 'E',
    link: function (scope, attr, element) {
      $http.get('https://api.github.com/users/hanford/events').success(function(response) {
        var events = [];

        for (var i = 5 - 1; i >= 0; i--) {
          var instance = {};
          var evt = response[i];

          if (evt.type.indexOf("Event") > -1) {
            var eType = evt.type.substring(0, evt.type.indexOf("Event"));
            instance.type = eType.replace(/([a-z](?=[A-Z]))/g, '$1 ');
          }

          instance.date = evt.created_at;
          instance.repo = evt.repo.name;
          instance.name = evt.actor.login;
          instance.avatar = evt.actor.avatar_url;
          events.push(instance);
        }

        scope.events = events.reverse();
        console.log(events);

      });
    }
  }
}])