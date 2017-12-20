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
	              method: 'GET',
	          })
        }
        return {
            getContestList: getContestList
        };
    });
}());
