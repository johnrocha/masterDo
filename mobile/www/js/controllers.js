angular.module('app.controllers', [])
  
.controller('MinhasListasCtrl', function($scope, GerenciadorDeListasDeTarefas) {
  $scope.minhasListas = GerenciadorDeListasDeTarefas.buscarTodas()

})
   
.controller('ListaDetalhesCtrl', function($scope, $stateParams, GerenciadorDeListasDeTarefas) {
  var idDaLista = $stateParams.listaId;
  var listaDeTarefas = GerenciadorDeListasDeTarefas.buscarPorId(idDaLista);

  $scope.lista = listaDeTarefas;

  console.log("Lista de tarefas encontrada: ", listaDeTarefas);
})


.controller('NovaListaCtrl', function($scope, GerenciadorDeListasDeTarefas) {
  $scope.novaListaDeTarefas = {};

  $scope.criarNovaLista = function() {
    GerenciadorDeListasDeTarefas.criarNovaListaDeTarefa( $scope.novaListaDeTarefas );
    $scope.novaListaDeTarefas = {}; // limpar o objeto para permitir nova adição (vai limpar o form ;)
  }
})