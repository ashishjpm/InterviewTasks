/**
* @ngdoc function
* @name falcon.controller.ContestAttemptCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestAttemptCtrl', ['$scope', '$state', '$timeout' ,'CommonService', 'UserService',
    	function($scope, $state, $timeout, CommonService, UserService) {
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
            $timeout(function() {
                $(document).ready(function(){
                    $.material.init();
                });
            }, 0);
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
            UserService.getContestQuestions(71).then(
                function(response){
                    $scope.contestAttempt.queDetails = response.data.responseObject.contestQuestionDTOs;
                    $scope.contestAttempt.currentQue = $scope.contestAttempt.queDetails[0];
                    $timeout(function() {
                        $(document).ready(function(){
                            $.material.init();
                        });
                    }, 0);
                },
                function(err){console.log(err);}
            );
        }

        $scope.contestAttempt.updateQue = function(question){
            $scope.contestAttempt.currentQue = question;
            $timeout(function() {
                $(document).ready(function(){
                    $.material.init();
                });
            }, 0);
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

        $scope.testCode = function(){
            var code = myCodeMirror.getValue();
            var language = $scope.contestAttempt.language;
            $scope.contestAttempt.testCaseResults=[];
            UserService.testCode(language, 71, code).then(function (response) {
                $scope.contestAttempt.testCaseResults = response.data.responseObject;
            })
        };

        $scope.submitCode = function(){
            var code = myCodeMirror.getValue();
            var language = $scope.contestAttempt.language;
            UserService.submitCode(language, 71, code).then(function (response) {
                console.log(response);
            })
        };

        $scope.submitOptions = function(){
            UserService.submitOptions($scope.contestAttempt.currentQue.questionId, $scope.contestAttempt.selectedSCQ, $scope.contestAttempt.currentQue.points, $scope.contestAttempt.currentQue.negativePoints).then(
                function(response){
                    console.log("success");
                },
                function(err){

                }
            );
        }
        
        init();
    }]);
}());
