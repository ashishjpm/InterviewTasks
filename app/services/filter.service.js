/**
 * Properties of the viatask app
 *
 * @class viatask.service.FilterService
 * @memberOf viatask.FilterService
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */

;
(function() {
    viatask
        .factory('FilterService', function() {
            function filterList(rawList, filterData) {
            	var filteredList = [];
        	  	if($scope.filteredCarrier == "All"){
	                $scope.flightList.onwardJourneys = unEditedFlightList.onwardJourneys;
	            }
	            else{
	                $scope.flightList.onwardJourneys = [];
	                for(let i=0; i<unEditedFlightList.onwardJourneys.length;i++){
	                    if(unEditedFlightList.onwardJourneys[i].flights[0].carrier.name == $scope.filteredCarrier){
	                        $scope.flightList.onwardJourneys.push(unEditedFlightList.onwardJourneys[i]);
	                    }
	                }
	            }
            	filteredList = rawList;
                return filteredList;
            };
            return {
            	filterList: filterList
            };
        });
}());
