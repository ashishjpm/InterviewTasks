/**
 * Service of the falcon app
 *
 * @class falcon.service.CommonService
 * @memberOf falcon.CommonService
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */

;
(function() {
    falcon
        .factory('CommonService', function($http) {

        	function getTimeInSecs(){}

            return {
            	getTimeInSecs: getTimeInSecs
            };
        });
}());
