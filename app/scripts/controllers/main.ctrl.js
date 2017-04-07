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
        $scope.headerText = "Register Aadhaar";
        $scope.validPh = false;
        $scope.validOtp = false;
        $scope.tncChecked = false;
    }

    $scope.removeAdharPopup = function(){
        if($scope.validOtp && $scope.validPh && $scope.tncChecked ){
            $scope.showAdharPopup = false;
            $scope.showSuccessMsg = true;
            $scope.headerText = "Signing...";
            $timeout(() => {
                $scope.showSuccessMsg = false;
                $scope.headerText = "Signed";
            }, 3000); 
        }
    }

    $scope.validatePhone = function(ph){
        (/^[0-9]{12}$/.test(ph)) ? $scope.validPh = true : $scope.validPh = false;
    }

    $scope.validateOtp = function(otp){
        (/^[0-9]{6}$/.test(otp)) ? $scope.validOtp = true : $scope.validOtp = false;
    }

    initCtrl();

}]);
