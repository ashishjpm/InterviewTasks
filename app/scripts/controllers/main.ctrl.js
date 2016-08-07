/**
 * @ngdoc function
 * @name interviewTasks.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('IndexCtrl', ['$scope', 'Settings', function ($scope, Settings) {
    //Global variables

    function initCtrl() {
        //Init scope variables
        $scope.jsonData = Settings.jsonData;
        $scope.headers = getTableHeader();
        $scope.sortType     = 'Name'; 
        $scope.sortReverse  = false;
        $scope.searchTable   = '';
        $scope.condApplied = [];
        $scope.colors = [
            {
                name:'Red',
                hex:'#f44336'
            },
            {
                name:'Green',
                hex:'#4CAF50'
            },
            {
                name:'Blue',
                hex:'#3F51B5'
            },
            {
                name:'Yellow',
                hex:'#FFEB3B'
            }
        ];
    }
    
    function getTableHeader(){
        var headerArray = [];
        for(var i=0;i<Settings.jsonData.length;i++){
            for(var key in Settings.jsonData[i])
                if(headerArray.indexOf(key)==-1)
                    headerArray.push(key);
        }
        return headerArray;
    }
    
    $scope.changeSort = function(head){
        $scope.sortType = head; 
        $scope.sortReverse = !$scope.sortReverse;
    }
    
    $scope.applyCondClicked = function(){
        var currentCondition = {
            column: $scope.conditionColumn,
            gt: $scope.conditionGT,
            lt: $scope.conditionLT,
            color:  $scope.conditionColor
        }
        $scope.condApplied.push(currentCondition);
    }
    
    $scope.getFontColor = function(column,value){
        var color = '';
        for(var i=$scope.condApplied.length-1;i>=0;i--)
            if(
                (column == $scope.condApplied[i].column)
                &&(value > $scope.condApplied[i].gt)
                &&(value < $scope.condApplied[i].lt)
            ){
                color = $scope.condApplied[i].color.name;
                break;
            }
        return color;
    }
    
    initCtrl();

}]);