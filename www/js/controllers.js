angular.module('app.controllers', [])
  
.controller('MinhasListasCtrl', function($scope) {
  $scope.minhasListas = [
    { _id: '1', name: 'Lista de compras 1' },
    { _id: '2', name: 'Lista de compras 2' },
  ];


})
   
.controller('ListaDetalhesCtrl', function($scope, $stateParams) {
  //                                              ^^^^^^^^^^^^
  // $stateParams é um objeto que guarda os rótulos que vc definiu com ":" na definição de rota.
  //  Hein!??! Explico:
  // Na linha 30 de routes.js a gente definiu a rota "/minhas-listas/:listaId", não foi?
  // Quando a url "/minhas-listas/123" for acessada o $stateParams.listaId vai retornar o valor "123"!
  // Fácil, né não?! ;)

  var idDaLista = $stateParams.listaId;
  // A gente vai usar esse "idDaLista" para recuperar a lista que queremos exibir os detalhes.

})
 