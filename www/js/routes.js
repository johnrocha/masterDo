angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.minhasListas', {
    url: '/minhas-listas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhasListas.html',
        controller: 'minhasListasCtrl'
      }
    }
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.nomeDaLista', {
    url: '/minhas-listas/id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nomeDaLista.html',
        controller: 'nomeDaListaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/minhas-listas')

  

});