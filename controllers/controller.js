var app=angular.module('app',[]);
app.controller('myCtrl',function($scope){
    $scope.name = "HELLO WORLD";
    console.log($scope.name);
});