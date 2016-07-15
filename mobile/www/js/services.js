angular.module('app.services', [])

// Usamos Factories (ou Services) para compartilhar código entre controllers - essa é a melhor definição por ora! ;)
// Como estamos programando em portugues, à partir de agora sempre falarei "Serviço", ok?
// 
// Aqui definimos um Serviço que terá como rótulo as operações que queremos fazer sobre nossa Lista.
// Cada rótulo vai tá associado à um função - sim, podemos ter rótulos apontando para funções!!
// Exemplo:
//  GerenciadorDeListasDeTarefas.buscarTodas() vai retornar um array com ... todas as listas!
//  GerenciadorDeListasDeTarefas.buscarPorId('123') vai retornar o objeto Lista cujo _id é ... 123!
// 
// Sacou, né?!
// 

.factory('GerenciadorDeListasDeTarefas', ['$http', function($http){
  //                                              ^^^^^^^
  // ;)

  var GerenciadorDeListasDeTarefas = {

    // Uchôa: Essa função faz um request GET para '/lista-de-tarefas/carregar-todas' e retonar uma coisa
    //  que vc vai registrar um callback quando a resposta chegar.
    // Vc: Hein?!!?
    // Uchôa: Eu mostro, segura a onda aí...
    //        Assim, ó?!
    // 
    // GerenciadorDeListasDeTarefas.buscarTodas().then(function(listaDeTarefasDoServidor) {
    //   ...
    // })
    // 
    // Sacou aí??
    buscarTodas: function() {
      var url = 'http://localhost:3000/lista-de-tarefas/carregar-todas';
      //         ^^^^^^^^^^^^^^^^^^^^^ 
      //                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      // 
      // http://localhost:3000 = endereço base do seu sistema Servidor!
      // /lista-de-tarefas/carregar-todas = rota que vc criou lá em serviro/app.js para retornar um JSON com todas as Lista De Tarefas
      return $http.get(url);
    },

    criarNovaListaDeTarefa: function(listaDeTarefa) {
      var url = 'http://localhost:3000/lista-de-tarefas/criar';
      return $http.post(url, listaDeTarefa);
    },

    buscarPorId: function(idQueQueroBuscar) {
      var url = 'http://localhost:3000/lista-de-tarefas/buscar-por-id?id=' + idQueQueroBuscar;
      return $http.get(url);
    }

  };

  return GerenciadorDeListasDeTarefas;

}])

.service('BlankService', [function(){

}]);

