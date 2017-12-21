/**
* Service of the falcon app
*
* @class falcon.service.UserService
* @memberOf falcon.UserService
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
    falcon
    .factory('UserService', function($http, AppConstant) {
        function getContestList(id){
            return $http({
                url: AppConstant.api + 'contest/view-contest-list',
                method: 'GET'
            })
        }
        function getLanguage(){
            return $http({
                url: AppConstant.api + 'engine/get-compilers',
                method: 'GET'
            })
        }

        function testCode(language, questionId, source){
            return $http({
                url: AppConstant.api + 'engine/get-result',
                method: 'POST',
                data:{
                    'languageId':language,
                    'questionId':questionId,
                    'source':source,
                    'input':1
                }
            })
        }

        function submitCode(user, contest, language, questionId, source){
            return $http({
                url: AppConstant.api + 'questionresponse/'+ questionId + '/save-response',
                method: 'POST',
                data:[{
                    "userId":user,
                    "contestId": contest,
                    "program": source,
                    "languageId":language,
                    "questionId": questionId,
                    "timeTaken": 0
                }]
            })
        }

        function getContestDetail(id){
            return $http({
                url: AppConstant.api + 'contest/' + id,
                method: 'GET',
            })
        }
        function getContestQuestions(id){
        	return $http({
	            url: AppConstant.api + 'contest/' + id,
	            method: 'GET',
	        })
        }
        function getUserContestList(emailId){
            return $http({
                url: AppConstant.api + 'user/view-contest/' + emailId,
                method: 'GET'
            })
        }
        return {
            getContestDetail: getContestDetail,
            getContestList: getContestList,
            getLanguage: getLanguage,
            getUserContestList: getUserContestList,
            testCode:testCode,
            submitCode:submitCode,
            getContestQuestions: getContestQuestions
        };
    });
}());
