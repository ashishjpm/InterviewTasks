/**
 * @ngdoc function
 * @name interviewTasks.controller:MainCtrl
 * @description
 * # MainCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('MainCtrl', ['$scope', 'MainService', '$timeout', function ($scope, MainService, $timeout) {
    //Global variables

    function initCtrl() {
        //Init scope variables
        $scope.showAdharPopup = true;
        $scope.showSuccessMsg = false;
        
    }

    $scope.removeAdharPopup = function(){
    	$scope.showAdharPopup = false;
        $scope.showSuccessMsg = true;
        $timeout(() => {
        	$scope.showSuccessMsg = false;
        }, 3000);
    }

    initCtrl();

}]);
