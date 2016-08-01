/**
 * @ngdoc function
 * @name interviewTasks.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('IndexCtrl', ['$scope', '$timeout', 'Settings', function ($scope, $timeout, Settings) {
    //Global variables
    var numberOfSeats = Settings.numberOfSeats;
    var userName = '';
    var seatForUser = 0;
    
    function initCtrl() {
        //init scope variables
        $scope.name='';
        $scope.numberOfSeats = 0;
        $scope.seatStatus = [];
        $scope.bookingStats = [];
        
        //status => 0: unavailable, 1: available, 2: selected;
        for(var i=0; i<numberOfSeats; i++){
            $scope.seatStatus[i] = {
                nameResTo:'',
                status:1,
            }
        }
    }
    function resetCurrent(){
        for(var i=0; i<numberOfSeats; i++){
            $scope.seatStatus[i].status=($scope.seatStatus[i].status == 2)?1:$scope.seatStatus[i].status;
        }
    }
    
    $scope.startSelecting = function(){
        if(($scope.name != '') && ($scope.numberOfSeats > 0)){
            resetCurrent();
            userName = $scope.name;
            seatForUser = $scope.numberOfSeats;
        }
        else
            alert("Name should not be empty and number of seats should be greater than 0");
    }
    
    $scope.seatClicked = function(seatNo){
        console.log(seatNo);
        if($scope.seatStatus[seatNo].status != 0)
            if(($scope.seatStatus[seatNo].status == 1)  && (seatForUser > 0)){
                $scope.seatStatus[seatNo].status = 2;
                seatForUser--;
            }
            else if($scope.seatStatus[seatNo].status == 2){ 
                $scope.seatStatus[seatNo].status = 1;
                seatForUser++;
            }
    }
    
    $scope.cnfrmClicked = function(){
        if(seatForUser == 0){
            var currentSeats = [];
            for(var i=0; i<numberOfSeats; i++){
                if($scope.seatStatus[i].status == 2){
                    currentSeats.push(i);
                    $scope.seatStatus[i].status = 0;
                }
            }
            var statsObj = {
                name: userName,
                noOfSeats: $scope.numberOfSeats,
                seats: angular.copy(currentSeats)
            }
            $scope.bookingStats.push(statsObj);
        }
        else
            alert("Please select all seats");
    }

    initCtrl();

}]);