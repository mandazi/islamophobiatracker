app.controller("IncidentCtrl",['$scope', '$firebaseObject', function($scope, $firebaseArray) {
  var ref = new Firebase("https://islamophobia-tracker.firebaseio.com/incidents");

  $scope.incidents = $firebaseArray(ref);

  $scope.addIncident = function(incident){
    $scope.incidents.$add(incident).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      list.$indexFor(id); // returns location in the array
    });
  }
}]);
