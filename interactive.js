(function() {
    var app = angular.module('myPage', []);
    app.service('pageService', function(){
        this.focusedTab = 0;
        this.focusedOrNot = function(idx) {
            return idx === this.focusedTab;
        }
        this.changeTab = function(idx) {
            this.focusedTab = idx;
        }
    });
    
    app.controller('navBarController', 
    ['$rootScope','$scope','pageService',
    function($rootScope, $scope, pageService) {
        $scope.pageService = pageService;
    }]);
    
    app.controller('contentController',
    ['$rootScope','$scope','pageService',
    function($rootScope, $scope, pageService) {
        $scope.pageService = pageService;
    }]);
})();