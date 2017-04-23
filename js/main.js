angular.module('Vendas', ['ngRoute'])
    .config(function($routeProvider) {
        
        $routeProvider.when('/home', {
            controller: 'HomeController',
            templateUrl: 'partials/home.html'
        });
        
        $routeProvider.when('/produtos', {
            controller: 'ProdutosController',
            templateUrl: 'partials/produtos.html'
        });
        
        $routeProvider.when('/produtos/novo', {
            controller: 'NovoProdutoController',
            templateUrl: 'partials/editar-novo-produto.html'
        });
        
        $routeProvider.when('/produto/:codigo', {
           controller: 'EditarProdutoController',
           templateUrl: 'partials/editar-novo-produto.html' 
        });
        
        $routeProvider.otherwise({redirectTo : '/home'});
    });