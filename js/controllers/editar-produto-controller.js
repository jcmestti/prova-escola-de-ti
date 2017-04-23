angular.module('Vendas')
    .controller('EditarProdutoController', function($scope, $routeParams, ProdutosService, $location) {
        
        $scope.produto = ProdutosService.buscarPeloCodigo($routeParams.codigo);
        
        $scope.salvar = function(produtoAtualizado) {
            ProdutosService.atualizarProduto(produtoAtualizado);
            $location.path('/produtos');
        }
        
    });