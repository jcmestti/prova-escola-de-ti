angular.module('Vendas', ['ngRoute'])
    .config(function($routeProvider) {
        
        $routeProvider.when('/home', {
            controller : 'HomeController',
            templateUrl: 'partials/home.html'
        });
        
        $routeProvider.when('/produtos', {
            controller : 'ProdutosController',
            templateUrl: 'partials/produtos.html'
        });
        
        $routeProvider.when('/produtos/novo', {
            controller : 'NovoProdutoController',
            templateUrl: 'partials/novo-produto.html'
        });
        
        $routeProvider.otherwise({redirectTo : '/home'});
    });