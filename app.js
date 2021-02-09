(function(){

    'use strict';
var app=angular.module('Library',[]);
app.controller('LibraryController',LibraryController);

LibraryController.$inject=['$scope'];


function LibraryController($scope){
    $scope.listOfBooks=[];
    $scope.book="";
    $scope.messageStyle = {display : 'none'};

    $scope.enterValue = function(){


        if($scope.book==""){
            console.log($scope.book);
            $scope.message = "Enter some value first";
            $scope.isSuccess='false';
            setMessageColor('red');
        }
        else if($scope.listOfBooks.indexOf($scope.book) != -1){
            console.log("Duplicate value");
            $scope.message = "Book already present";
            setMessageColor('red');
            $scope.book="";
        }
        else {
            $scope.listOfBooks.push($scope.book);
            console.log($scope.listOfBooks);
            $scope.message = "Book added to list";
            $scope.book="";
            setMessageColor('green')
        }
            
    }
    $scope.deleteValue = function(index){
        $scope.listOfBooks.splice(index,1);
        // listOfBooks.slice(listOfBooks.indexOf(item), 1);
        setMessageColor('red')
        $scope.message="Book has been removed succesfully"
        
    }
    function setMessageColor(color) {
        $scope.messageStyle = {color: color};
        $scope.textBoxStyle = {'border-color': color};
      }

}
})();