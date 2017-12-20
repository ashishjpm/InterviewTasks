/**
* @ngdoc function
* @name falcon.controller.ContestAttemptCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestAttemptCtrl', ['$scope', 'CommonService', 'UserService',
    	function($scope, CommonService, UserService) {
    	$scope.contestAttempt = {};

    	function init(){
            $scope.root.userSelected = "Ongoing Contest";
            $scope.contestAttempt.activeQuestion = {
            	'inProgress' : true,
            	'completed' : false,
            	'unAttempted' : false
            }
    	}

    	function getOngoingAttemptList(){
    		$scope.contestAttempt.list = [];
    		UserService.getContestDetail($scope.root.user.activeContestId).then(
    			function(response){
    				$scope.contestAttempt.list = response.data.responseObject.contestQuestionDTOs;
    			},
    			function(err){

    			}
    		);
    	}

        init();
    }]);
}());
