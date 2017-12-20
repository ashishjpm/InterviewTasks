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
        return {
            getContestList: getContestList
        };
    });
}());
