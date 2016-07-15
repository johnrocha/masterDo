angular.module('app.controllers', [])
  
.controller('MinhasListasCtrl', function($scope, GerenciadorDeListasDeTarefas) {
  $scope.minhasListas = [];

  // Mando buscar todos...
  GerenciadorDeListasDeTarefas.buscarTodas().then(function(respostaDoServidor) {
    // ... quando chegar, jogo em $scope para poder aparecer no HTML!
    $scope.minhasListas = respostaDoServidor.data;
  })

})
   
.controller('ListaDetalhesCtrl', function($scope, $stateParams, GerenciadorDeListasDeTarefas) {
  var idDaLista = $stateParams.listaId;

  GerenciadorDeListasDeTarefas.buscarPorId(idDaLista).then(function(respostaDoServidor) {
    $scope.lista = respostaDoServidor.data;
  });

})


.controller('NovaListaCtrl', function($scope, GerenciadorDeListasDeTarefas) {
  $scope.novaListaDeTarefas = {};

  $scope.criarNovaLista = function() {
    GerenciadorDeListasDeTarefas.criarNovaListaDeTarefa( $scope.novaListaDeTarefas ).then(function(respostaDoServidor) {
      // Aqui o objeto está, de fato, inserido no BD pelo servidor.
      // Agora posso add no meu array local, pq ele vai ter o _id preenchido
      $scope.minhasListas.push(respostaDoServidor.data);
      $scope.novaListaDeTarefas = {}; // limpar o objeto para permitir nova adição (vai limpar o form ;)
    })
  }
})