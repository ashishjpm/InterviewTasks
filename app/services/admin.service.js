/**
* Service of the falcon app
*
* @class falcon.service.AdminService
* @memberOf falcon.AdminService
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
    falcon
    .factory('AdminService', function($http, AppConstant) {
        function getContestList(id){
            return $http({
                url: AppConstant.api + 'contest/view-contest-list',
                method: 'GET',
            })
        }

        function createContest(contest){
            return $http({
                url: AppConstant.api + 'contest/create',
                method : 'POST',
                data : contest
            })
        }

        function addQuestionToContestTemplate(contest, questions){
            return $http({
                url: AppConstant.api + 'contest/'+contest+'/add-questions',
                method : 'POST',
                data : questions
            })
        }

        function fetchContestQuestions(contest){
            return $http({
                url: AppConstant.api + 'question/getQuestions',
                method : 'GET'
            })
        }

        function saveConfiguration(contest, configs){
            return $http({
                url: AppConstant.api + 'contest/'+contest+'/add-contestant',
                method : 'POST',
                data : configs
            })
        }


        return {
            getContestList: getContestList,
            completeFirstStep: createContest,
            completeSecondStep:addQuestionToContestTemplate,
            fetchContestQuestions : fetchContestQuestions,
            saveContestConfigration:saveConfiguration,

        };
    });
}());
