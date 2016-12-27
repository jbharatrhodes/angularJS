(function () {

  'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name="";
$scope.totalValue=0;
$scope.displayNumeric = function ()
{
  var totalnamesValue=calculateNumericForString($scope.name);
  $scope.totalValue=totalnamesValue;
};
function calculateNumericForString(string)
{
  var totalString=0;
  for(var i=0; i<string.length;i++)
  {
    totalString+=string.charCodeAt(i);
  }
  return totalString;
}

});

})();
