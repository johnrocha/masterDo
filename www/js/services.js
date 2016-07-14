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
// Já já, vai ser aqui que faremos o request para o nosso servidor!

.factory('GerenciadorDeListasDeTarefas', [function(){
  //      ^^^^^^^^^^^^^^^^^^^
  // Esse nome é que vc vai usar como parâmetro nos seus controllers

  var arrayInternoDeListasDeTarefas = [
      { _id: '1', nome: 'Lista de compras 1' },
      { _id: '2', nome: 'Lista de compras 2' },
    ]

  var GerenciadorDeListasDeTarefas = {

    buscarTodas: function() {
      return arrayInternoDeListasDeTarefas;
    },

    buscarPorId: function(idDaListaDeTarefaQueQueroEncontrar) {
      var listaDeTarefaEncontrada;

      for (var i = 0; i < arrayInternoDeListasDeTarefas.length; i++) {

        var listaDeTarefaDaVez = arrayInternoDeListasDeTarefas[i];
        if(listaDeTarefaDaVez._id === idDaListaDeTarefaQueQueroEncontrar){
          listaDeTarefaEncontrada = listaDeTarefaDaVez
        }
      }

      return listaDeTarefaEncontrada;
    }

  };

  return GerenciadorDeListasDeTarefas;

}])

.service('BlankService', [function(){

}]);

