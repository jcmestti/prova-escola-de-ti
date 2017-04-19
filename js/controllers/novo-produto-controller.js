angular.module('Vendas')
    .controller("NovoProdutoController", function($scope, ProdutosService) {
        
        $scope.novoProduto = {
            codigo: '',
            descricao: '',
            preco: ''
        }
        
        $scope.adicionarProduto = function(novoProduto) {
            ProdutosService.adicionarProduto(novoProduto);
        }
        
    });