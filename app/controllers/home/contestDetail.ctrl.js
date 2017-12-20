/**
* @ngdoc function
* @name falcon.controller.ContestDetailCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestDetailCtrl', ['$scope', 'CommonService',
    	function($scope, CommonService) {
    	$scope.contestDetail = {};

    	function init(){
            $scope.root.userSelected = "Contest Details";
            $scope.contestDetail.title = "this is title";
            getContestDetail();
    	}

        function getContestDetail(){
            //send api via $scope.root.user.currentContestDetail;
        }

        init();
    }]);
}());
