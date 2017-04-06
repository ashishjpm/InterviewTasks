angular.module('viatask')
    .directive('flightlistItem', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/listitem.directive.html',
            scope: {
                data: '='
            },
            link: function(scope) {
                var jstimeToHourMin = function(timestr){
                    var time = new Date(timestr);
                    return time.getHours() + ":" + time.getMinutes();
                }
                var getDurObj = function(){
                    var totalTime = scope.data.journeyInfo[0].journeyTime;
                    var stops = scope.data.flights.length;
                    var path = [scope.data.flights[0].depDetail.code];
                    for(var i=0; i<scope.data.flights.length; i++){
                        path.push(scope.data.flights[i].arrDetail.code)
                    }
                    return {
                        time: (parseInt(totalTime/60)) + "h " + (parseInt(totalTime%60)) +"m",
                        stops: (stops != 1) ? stops-1 + '-stops' : 'Non-Stop',
                        path: path
                    };
                }
                var flightLength = scope.data.flights.length;
                scope.diaplayValue = {
                    "imagepath": scope.data.flights[0].carrier.code,
                    "carrierName": scope.data.flights[0].carrier.name,
                    "carrierCode": scope.data.flights[0].carrier.code,
                    "flightNo": scope.data.flights[0].flightNo,
                    "price": scope.data.fares.totalFare.total.amount,
                    "depDetail": {
                        city: scope.data.flights[0].depDetail.city,
                        time: jstimeToHourMin(scope.data.flights[0].depDetail.time)
                    },
                    "arrDetail": {
                        city: scope.data.flights[flightLength-1].arrDetail.city,
                        time: jstimeToHourMin(scope.data.flights[flightLength-1].arrDetail.time)
                    },
                    "duration": getDurObj() 
                };
            }
        };
    });
