/**
* @ngdoc function
* @name falcon.controller.contestList
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestListCtrl', ['$scope', 'CommonService',
    	function($scope, CommonService) {
    	$scope.contestList = {};

    	function init(){
    		$scope.contestList.type = ['All', 'Ongoing', 'Completed']
    		$scope.contestList.typeSelected = 'All';
    		$scope.contestList.list = [1,2,3]
    	}

        init();
    }]);
}());
