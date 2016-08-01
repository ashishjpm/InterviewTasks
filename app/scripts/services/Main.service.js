'use strict';

/**
 *services/Main.service.js
 * ===========
 * This service is created to use provide service to Index controller.
 *
 * @class interviewTasks.services.MainService
 * @memberOf interviewTasks.services
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */
angular.module('interviewTasks.services')
.factory('MainService', function ($http, Settings, $state, Properties, $log) {
    
    function getDimLvl(){
    }
    
  return {
      getDimLvl: getDimLvl
  };

});