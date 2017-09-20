var app = angular.module('app.lession', []);

app.controller('controller.basic', function($scope) {
  $scope.event = this; // needed for angular

  // the input variable 1
  this.in1 = "input one";

  // the input variable 1
  this.in2 = "input two";

  this.calcOut = function(){
    // here comes your code
    return "hallo";
  }   
});


