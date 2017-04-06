/**
 * Properties of the viatask app
 *
 * @class viatask.service.MainService
 * @memberOf viatask.MainService
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */

;
(function() {
    viatask
        .factory('MainService', function($http) {
            function getFlightList() {
                return $http.get('/getJsonData');
            };

            return {
                getFlightList: getFlightList
            };

        });
}());
