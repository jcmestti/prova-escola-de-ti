angular.module('Vendas')
    .controller('ProdutosController', function($scope, ProdutosService, $location) {
        
        //Variables Declaration
        $scope.busca = '';
        
        //List of products
        $scope.listaProdutos = ProdutosService.listarProdutos();
        
        // Delete products
        $scope.excluirProduto = function(indice) {
            ProdutosService.excluirProduto(indice);
            $scope.listaProdutos = ProdutosService.listarProdutos();
        }
        
        // Redirect to another page
        $scope.goTo = function(newPath) {
            $location.path(newPath);
        }
    });