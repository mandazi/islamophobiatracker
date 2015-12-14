app.controller("LoginCtrl",['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://islamophobia-tracker.firebaseio.com");

  $scope.loginError = null;
  $scope.loginUser = function(user){
    ref.authWithPassword({
      email    : user.email,
      password : user.password
    }, function(error, authData) {
      if (error) {
        //console.log("Login Failed!", error);
        $scope.loginError = error;
      } else {
        //console.log("Authenticated successfully with payload:", authData);
        $scope.loginError = null;
        $location.path( "/" );
      }
    });

  }

}]);
