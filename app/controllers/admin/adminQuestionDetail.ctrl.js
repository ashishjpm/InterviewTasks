/**
* @ngdoc function
* @name falcon.controller.QuestionDetailCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('QuestionDetailCtrl', ['$scope', '$state' ,'CommonService',
        function($scope, $state ,CommonService) {
        $scope.adminQuestionDetails = {};

        function init(){
        	$scope.root.admin.showAddBtn = true;
        	$scope.root.adminSelected = "Question Details";
            $scope.adminQuestionDetails.typeList = ['SCQ','MCQ','Coding'];
            $scope.adminQuestionDetails.type = 'Coding';        	
        }

        $scope.adminQuestionDetails.backToList = function(){
            $state.go('admin.question');
        }

        init();
    }]);
}());
