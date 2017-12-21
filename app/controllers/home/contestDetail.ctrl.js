/**
* @ngdoc function
* @name falcon.controller.ContestDetailCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestDetailCtrl', ['$scope', '$state' ,'CommonService', 'UserService',
    	function($scope, $state ,CommonService, UserService) {
    	$scope.contestDetail = {};

    	function init(){
            $scope.root.userSelected = "Contest Details";
            $scope.contestDetail.title = "this is title";
            $scope.contestDetail.details = [];
            getContestDetail();
    	}

        function getContestDetail(){
            //send api via $scope.root.user.currentContestDetail;
            UserService.getContestDetail($scope.root.user.currentContestDetail.id).then(
                function(response){
                    $scope.contestDetail.details = response.data.responseObject;
                    $scope.contestDetail.details.startDate = CommonService.tsToDateString($scope.contestDetail.details.startDate);
                    $scope.contestDetail.details.endDate = CommonService.tsToDateString($scope.contestDetail.details.endDate);
                },
                function(err){
                    $scope.contestDetail.details = [];
                }
            );
        }

        $scope.attemptContest = function(){
            $state.go('home.contestAttempt');
        }

        init();
    }]);
}());
