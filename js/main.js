angular.module('Vendas', ['ngRoute'])
    .config(function($routeProvider) {
        
        $routeProvider.when('/home', {
            controller : 'homeController',
            templateUrl: 'partials/home.html'
        });
        
        $routeProvider.when('/produtos', {
            controller : 'produtosController',
            templateUrl: 'partials/produtos.html'
        });
        
        $routeProvider.otherwise({redirectTo : '/home'});
    });