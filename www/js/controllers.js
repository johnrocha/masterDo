angular.module('app.controllers', [])
  
.controller('MinhasListasCtrl', function($scope, GerenciadorDeListasDeTarefas) {
  $scope.minhasListas = GerenciadorDeListasDeTarefas.buscarTodas()

})
   
.controller('ListaDetalhesCtrl', function($scope, $stateParams, GerenciadorDeListasDeTarefas) {
  var idDaLista = $stateParams.listaId;
  var listaDeTarefas = GerenciadorDeListasDeTarefas.buscarPorId(idDaLista);

  // Torna a lista de tarefas que encontramos pelo id disponível para o HTML
  $scope.lista = listaDeTarefas;

  console.log("Lista de tarefas encontrada: ", listaDeTarefas);
})
 