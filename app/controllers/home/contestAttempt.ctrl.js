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
        $scope.root.activeUser = window.localStorage.getItem('userId');
        $scope.root.activeContest = window.localStorage.getItem('contestId');

        $scope.contestAttempt = {};

        function init(){
            $scope.root.userSelected = "Ongoing Contest";
            $scope.contestAttempt.langData = [];
            $scope.contestAttempt.testCaseResults=[];
            $scope.contestAttempt.activeQuestion = {
            	'inProgress' : true,
            	'completed' : false,
            	'unAttempted' : false
            }
            $scope.contestAttempt.langData = [];
            $scope.contestAttempt.currentQue = {};
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
            UserService.getContestQuestions(71).then(
                function(response){
                    $scope.contestAttempt.queDetails = response.data.responseObject.contestQuestionDTOs;
                    $scope.contestAttempt.currentQue = $scope.contestAttempt.queDetails[0];
                },
                function(err){console.log(err);}
            );
        }

        $scope.contestAttempt.updateQue = function(question){
            $scope.contestAttempt.currentQue = question;
        }

    	function getOngoingAttemptList(){
    		$scope.contestAttempt.list = [];
            console.log("contestId", $scope.root.user.activeContest);
    		UserService.getContestDetail($scope.root.user.activeContest).then(
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

        $scope.testCode = function(){
            console.log('userid', $scope.root.activeUser);
            var code = myCodeMirror.getValue();
            var language = $scope.contestAttempt.language;
            var questionId = $scope.contestAttempt.currentQue.questionId;
            $scope.contestAttempt.testCaseResults=[];
            UserService.testCode(language, questionId, code).then(function (response) {
                $scope.contestAttempt.testCaseResults = response.data.responseObject;
            })
        };

        $scope.submitCode = function(){
            var userId = $scope.root.activeUser;
            var code = myCodeMirror.getValue();
            var language = $scope.contestAttempt.language;
            var questionId = $scope.contestAttempt.currentQue.questionId;
            var contestId = $scope.contestAttempt.currentQue.contestId;
            UserService.submitCode(userId, contestId, language, questionId, code).then(function (response) {
                console.log(response);
            })
        };
        init();
    }]);
}());
