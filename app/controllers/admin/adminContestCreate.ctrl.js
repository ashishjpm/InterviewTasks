/**
* @ngdoc function
* @name falcon.controller.AdminContestCreateCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
  .controller('AdminContestCreateCtrl', ['$scope', '$state', '$timeout' ,'CommonService', 'AdminService',
    function($scope, $state,$timeout ,CommonService, AdminService) {
    $scope.contestCreate = {};

    function init(){
        $scope.root.admin.showAddBtn = false;
        $scope.contestCreate.currentState = 1;
        $scope.contestCreate.stepOne = {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            openContest: true,
            status: "DRAFT",
            duration: 0,
            type: "",
            maxTeamSize: 0
        };
    }

      

    $scope.contestCreate.backToList = function(){
    	$state.go('admin.contest');
    }

    init();
    
  }]);
}());
