/**
 * Service of the falcon app
 *
 * @class falcon.service.LoginService
 * @memberOf falcon.LoginService
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */

;
(function() {
    falcon
        .factory('LoginService', function($http) {

        	function postLogin(username, password){
        		var form = new FormData();
        		form.append('username', username);
        		form.append('password', password);

                $.ajax({
                   type: 'POST',
                   url: '/login',
                   data: {
                        username: username,
                        password: password
                   },
                   dataType: 'json',
                   success: function(res) {
                    console.log('hello');
                   }
                });
//        		return $http({
//        			url: '/login?username'+username+'&',
//        			form,
//        			method: 'POST',
//        			transformRequest: angular.identity,
//                    headers: {'Content-Type': undefined}
//        		})
        	}

            return {
            	postLogin: postLogin
            };
        });
}());
