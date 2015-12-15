app.controller("IncidentCtrl",['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://islamophobia-tracker.firebaseio.com/incidents");

  $scope.incidents = $firebaseArray(ref);

  $scope.incidentSuccess = null;

  $scope.addIncident = function(incident){

    $scope.incidents.$add(incident).then(function(ref) {
      $scope.incidentSuccess = "Sucessfully submitted the incident."
      $scope.incident = {};
    });
  }

}]);
