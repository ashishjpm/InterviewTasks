/**
 * @ngdoc function
 * @name interviewTasks.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('AuthCtrl', ['$scope', '$state', function ($scope, $state) {
    //Global variables

    function initCtrl() {
        //Init scope variables
        $scope.validEmail = false;
	}
    
    $scope.verifyEmail = function(email){
    	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	$scope.validEmail = re.test(email);
    }
    
    $scope.continueToMain = function(){
    	if($scope.validEmail)
    		$state.go('main');
    }

    initCtrl();

}]);