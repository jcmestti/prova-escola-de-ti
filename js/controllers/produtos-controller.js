angular.module('Vendas')
    .controller('produtosController', function($scope) {
        $scope.listaProdutos = [{
            codigo: 1,
            descricao: "Sabonete",
            preco: 50
        },
        {
            codigo: 2,
            descricao: "Chocolate",
            preco: 4  
        }];
    });