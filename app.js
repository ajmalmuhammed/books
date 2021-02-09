(function(){

    'use strict';
var app=angular.module('Library',[]);
app.controller('LibraryController',LibraryController);

LibraryController.$inject=['$scope'];


function LibraryController($scope){
    $scope.listOfBooks=[];

    $scope.enterValues = function(){

        if($scope.book ==0){
            console.log($scope.book);
            $scope.message = "Enter some value";
        }
        else if($scope.listOfBooks.indexOf($scope.book) != -1){
            console.log("Duplicate value");
            $scope.message = "Duplicate Value found";
        }
        else {
            $scope.listOfBooks.push($scope.book);
            console.log($scope.listOfBooks);
        }
            
    }

}
})();