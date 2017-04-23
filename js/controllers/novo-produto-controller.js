angular.module('Vendas')
    .controller("NovoProdutoController", function($scope, ProdutosService, $location) {
   
        $scope.produto = {
            codigo: '',
            descricao: '',
            preco: ''
        }
        
        $scope.salvar = function(novoProduto) {
            ProdutosService.adicionarProduto(novoProduto);
            $location.path('/produtos');
        }
        
        $scope.cancelarProduto = function() {
            $scope.produto.codigo = '';
            $scope.produto.descricao = '';
            $scope.produto.preco = '';
            
            $location.path('/produtos');
        }
        
    });