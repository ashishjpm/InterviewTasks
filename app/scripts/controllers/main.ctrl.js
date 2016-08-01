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
        
        //status => 0: unavailable, 1: available, 2: selected;
        for(var i=0; i<numberOfSeats; i++){
            $scope.seatStatus[i] = {
                nameResTo:'',
                status:1,
            }
        }
    }
    
    $scope.startSelecting = function(){
        userName = $scope.name;
        seatForUser = $scope.numberOfSeats;
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
        for(var i=0; i<numberOfSeats; i++){
            $scope.seatStatus[i].status=($scope.seatStatus[i].status == 2)?0:$scope.seatStatus[i].status;
        }
    }

    initCtrl();

}]);