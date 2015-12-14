// This is the outer app controller so we can update the primary navigation bar
app.controller("AppCtrl",['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var ref = new Firebase("https://islamophobia-tracker.firebaseio.com");
  var authData = ref.getAuth();

  $scope.userLoggedIn = false;
  if (authData) {
    console.log("Authenticated user with uid:", authData.uid);
    $scope.userLoggedIn = true;
  }

}]);
