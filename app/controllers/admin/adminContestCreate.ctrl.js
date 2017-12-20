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
        $scope.contestCreate.currentState = 2;
        $scope.contestCreate.stepOne = {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            openContest: true,
            status: "DRAFT",
            duration: 3600,
            type: "FIXED",
            maxTeamSize: 1
        };

        $scope.contestCreate.fixedQueMeta = [
            {
                category: "",
                level: "",
                number: "",
            }
        ];
    }

    $scope.create = function(){
        $scope.contestCreate.stepOne.startDate = new Date($scope.contestCreate.stepOne.startDate).toISOString();
        $scope.contestCreate.stepOne.endDate = new Date($scope.contestCreate.stepOne.endDate).toISOString();
        AdminService.completeFirstStep($scope.contestCreate.stepOne).then(
        function(response){
            $scope.contestCreate.currentState += 1;
        });
    }

    $scope.contestCreate.backToList = function(){
    	$state.go('admin.contest');
    }

    init();
  }]);
}());
