app.controller("SignupCtrl",['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://islamophobia-tracker.firebaseio.com");
  $scope.addUser = function(user){
    ref.createUser({
      email    : user.email,
      password : user.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }


}]);
