angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })
  

  .state('menu.minhasListas', {
    url: '/minhas-listas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhasListas.html',
        controller: 'MinhasListasCtrl'
      }
    }
  })


  .state('menu.listaDetalhes', {
    url: '/minhas-listas/:listaId',
    //                   ^^^^^^^^
    // :listaId é "variável" que estará disponível dentro do controller
    //    e será preenchida com o que estiver depois de "/minhas-listas/" 
    // Exemplo:
    //  /minhas-listas/123                        => o valor de listaId será "123"
    //  /minhas-listas/asdf/fasda/fasd            => o valor de listaId será "asdf/fasda/fasd"
    //  /minhas-listas/qqr/coisa.que/vier.depois  => o valor de listaId será "qqr/coisa.que/vier.depois"
    // 
    // A gente vai usar para passar o _id da lista que queremos mostrar os detalhes.
    // Ver "ListaDetalhesCtrl" dentro de controller.js
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDetalhes.html',
        controller: 'ListaDetalhesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/minhas-listas')

  

});