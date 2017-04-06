/**
* @ngdoc function
* @name viatask.controller.ListCtrl
* @description controller for Flight listing page
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 viatask
    .controller('ListCtrl', ['$scope', 'MainService', 'FilterService', function($scope, MainService, FilterService) {
        $scope.flightList = {};
        var unEditedFlightList = {};
        function init() {
            $scope.reverseSort = false;
            $scope.currnetSort = "Price";
            $scope.carrierSet = ['All'];
            $scope.filteredCarrier = "All";
            $scope.sortKey = 'fares.totalFare.total.amount';
            $scope.stops = {
                "0": true,
                "1": true,
                "2": true,
                "3+": true
            };
            $scope.openFilterKey = "";
            $scope.priceSet = {
                max: null,
                min: null
            }
            $scope.priceFilter = {
                from: null,
                to: null
            }
            MainService.getFlightList().then(
                function(response) {
                    unEditedFlightList = angular.copy(response.data);
                    $scope.flightList = angular.copy(response.data);
                    for(let i=0; i<unEditedFlightList.onwardJourneys.length;i++){
                        if($scope.carrierSet.indexOf(unEditedFlightList.onwardJourneys[i].flights[0].carrier.name)==-1){
                            $scope.carrierSet.push(unEditedFlightList.onwardJourneys[i].flights[0].carrier.name)
                        }
                        if(
                            (unEditedFlightList.onwardJourneys[i].fares.totalFare.total.amount < $scope.priceFilter.from) || 
                            ($scope.priceFilter.from == null)
                        ){
                            $scope.priceFilter.from = unEditedFlightList.onwardJourneys[i].fares.totalFare.total.amount;
                        }
                        else if(
                            (unEditedFlightList.onwardJourneys[i].fares.totalFare.total.amount > $scope.priceFilter.to) || 
                            ($scope.priceFilter.to == null)
                        ){
                            $scope.priceFilter.to = unEditedFlightList.onwardJourneys[i].fares.totalFare.total.amount;
                        }
                    }
                    $scope.priceSet.min = $scope.priceFilter.from;
                    $scope.priceSet.max = $scope.priceFilter.to;
                },
                function(err) {
                    console.log(err);
                }
            );
        }
        $scope.filterList = function() {
            //TODO: abstract filters for code readability
            $scope.openFilterKey = "";
            $scope.flightList.onwardJourneys = [];
            for(let i=0; i<unEditedFlightList.onwardJourneys.length;i++){
                if(
                    (// filter for Carrier
                        ($scope.filteredCarrier == "All") || 
                        ($scope.filteredCarrier == unEditedFlightList.onwardJourneys[i].flights[0].carrier.name)
                    ) &&
                    (// filter for Price
                        (
                            ($scope.priceFilter.from == null) || 
                            ($scope.priceFilter.to == null)
                        ) ||
                        (
                            ($scope.priceFilter.from < unEditedFlightList.onwardJourneys[i].fares.totalFare.total.amount) &&
                            ($scope.priceFilter.to > unEditedFlightList.onwardJourneys[i].fares.totalFare.total.amount)
                        )
                    ) &&
                    (// filter for Stops
                        (($scope.stops["0"]) && (unEditedFlightList.onwardJourneys[i].flights.length == 1)) ||
                        (($scope.stops["1"]) && (unEditedFlightList.onwardJourneys[i].flights.length == 2)) ||
                        (($scope.stops["2"]) && (unEditedFlightList.onwardJourneys[i].flights.length == 3)) ||
                        (($scope.stops["3+"]) && (unEditedFlightList.onwardJourneys[i].flights.length > 4))
                    )
                ){
                    $scope.flightList.onwardJourneys.push(unEditedFlightList.onwardJourneys[i]);
                }
            }
        }
        $scope.changeSort = function(newSortKey, currentSort){
            $scope.currentSort = currentSort;
            if($scope.sortKey == newSortKey){
                $scope.reverseSort = !$scope.reverseSort;
            }
            else{
                $scope.sortKey = newSortKey;
            }
        }
        $scope.reset = function(){
            $scope.flightList.onwardJourneys = unEditedFlightList.onwardJourneys;
            $scope.filteredCarrier = "All";
            $scope.priceFilter = {
                from: $scope.priceSet.min,
                to: $scope.priceSet.max
            };
            $scope.stops = {
                "0": true,
                "1": true,
                "2": true,
                "3+": true
            };
        }
        $scope.absDivClick = function(event){
            event.stopPropagation();
        }
        $scope.changeOpenFilterKey = function(newKey){
            event.stopPropagation();
            $scope.openFilterKey = newKey;
        }
        $scope.bodyClick = function(){
            $scope.openFilterKey = "";
        }
        init();

    }]);
}());

