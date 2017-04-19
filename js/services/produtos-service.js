angular.module('Vendas')
    .service('ProdutosService', function() {
        
        var listaProdutos = [{
            codigo: 1,
            descricao: "Sabonete",
            preco: 50
        },
        {
            codigo: 2,
            descricao: "Chocolate",
            preco: 4  
        }];
        
        var service = {};
        
        service.listarProdutos = function() {
            return listaProdutos;
        };
        
        service.excluirProduto = function(indice) {
            listaProdutos.splice(indice, 1);
        }
        
        service.adicionarProduto = function(novoProduto) {
            listaProdutos.push(angular.copy(novoProduto));
        }
        
        return service;
    });