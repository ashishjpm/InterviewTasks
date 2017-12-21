/**
* @ngdoc function
* @name falcon.controller.ContestAttemptCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestAttemptCtrl', ['$scope', '$state' ,'CommonService', 'UserService',
    	function($scope, $state, CommonService, UserService) {
    	$scope.contestAttempt = {};
        function init(){
            $scope.root.userSelected = "Ongoing Contest";
            $scope.contestAttempt.langData = [];
            $scope.contestAttempt.activeQuestion = {
            	'inProgress' : true,
            	'completed' : false,
            	'unAttempted' : false
            }
            getLang();
            getQueDetails();
    	}

        function getLang(){
            UserService.getLanguage().then(
                function(response){
                    $scope.contestAttempt.langData = response.data.responseObject;
                },
                function(err){console.log(err);}
            );
        }

        function getQueDetails(){
            // $scope.root.user.currentContestDetail.id
            UserService.getContestQuestions(79).then(
                function(response){
                    $scope.contestAttempt.queDetails = response.data.responseObject.contestQuestionDTOs;
                },
                function(err){console.log(err);}
            );
        }

    	function getOngoingAttemptList(){
    		$scope.contestAttempt.list = [];
    		UserService.getContestDetail($scope.root.user.activeContestId).then(
    			function(response){
    				$scope.contestAttempt.list = response.data.responseObject.contestQuestionDTOs;
    			},
    			function(err){
                    console.log(err);
    			}
    		);
    	}


        $scope.contestAttempt.finishTest=function(){
            $state.go('home.contestList');
        }


        $scope.submitCode = function(){
            var code = myCodeMirror.getValue();
            var language = $scope.contestAttempt.language;
            UserService.testCode(language, 54, code).then(function (response) {
                console.log(response);
            })
        };

        init();
    }]);
}());
