angular.module('app.controllers', [])
  
.controller('MinhasListasCtrl', function($scope, GerenciadorDeListasDeTarefas) {
  // Mando buscar todos...
  GerenciadorDeListasDeTarefas.buscarTodas().then(function(respostaDoServidor) {
    // ... quando chegar, jogo em $scope para poder aparecer no HTML!
    $scope.minhasListas = respostaDoServidor.data;
  })

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