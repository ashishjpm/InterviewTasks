/**
* @ngdoc function
* @name falcon.controller.RootCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
  .controller('RootCtrl', ['$scope', '$state', 'CommonService', function($scope, $state, CommonService) {
  	$scope.root = {};
  	$scope.root.admin = {};

  	function init(){
      $scope.root.adminSelected = "My Contests";
      $scope.root.admin.showAddBtn = true;
  	}

  	$scope.root.admin.gotoState = function(stateName){
  		$state.go(stateName);
  		$scope.root.admin.showAddBtn = false;
  	}

    init();

  }]);
}());
