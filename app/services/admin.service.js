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

        return {
            getContestList: getContestList,
            completeFirstStep: createContest
        };
    });
}());
