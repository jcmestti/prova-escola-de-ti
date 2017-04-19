angular.module('Vendas')
    .controller('ProdutosController', function($scope, ProdutosService) {
        
        //Variables Declaration
        $scope.busca = '';
        
        //List of products
        $scope.listaProdutos = ProdutosService.listarProdutos();
        
        $scope.excluirProduto = function(indice) {
            ProdutosService.excluirProduto(indice);
            $scope.listaProdutos = ProdutosService.listarProdutos();
        }
    });