/**
* @ngdoc function
* @name falcon.controller.ContestAttemptCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestAttemptCtrl', ['$scope', 'CommonService',
    	function($scope, CommonService) {
    	$scope.contestAttempt = {};

    	function init(){
            $scope.root.userSelected = "Ongoing Contest";
            $scope.contestAttempt.activeQuestion = {
            	'inProgress' : true,
            	'completed' : false,
            	'unAttempted' : false
            }
    	}

        init();
    }]);
}());
