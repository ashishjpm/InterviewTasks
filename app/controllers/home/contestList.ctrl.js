/**
* @ngdoc function
* @name falcon.controller.contestList
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestListCtrl', ['$scope', '$state', 'CommonService',
    	function($scope, $state, CommonService) {
    	$scope.contestList = {};

    	function init(){
    		$scope.root.userSelected = "My Contests";
    		$scope.contestList.type = ['All', 'Ongoing', 'Completed']
    		$scope.contestList.typeSelected = 'All';
    		$scope.contestList.list = [1,2,3]
    	}

    	$scope.contestList.getDetails = function(item){
    		$scope.root.user.currentContestDetail = item;
    		$state.go('home.contestDetail');
    	}

      init();
    }]);
}());
