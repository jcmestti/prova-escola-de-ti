angular.module('Vendas')
    .controller('HomeController', function($scope, $location) {
        
        $scope.goTo = function(newPath) {
            $location.path(newPath);
        }
    });