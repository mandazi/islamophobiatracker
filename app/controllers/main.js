app.controller("MainCtrl",['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var ref = new Firebase("https://islamophobia-tracker.firebaseio.com/incidents");

  $scope.incidents = $firebaseArray(ref);

}]);
