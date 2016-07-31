(function() {
  'use strict'

  angular
    .module("shopCart", ['ui.router'])
    .config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider'];

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('inventory', {
        url: '/',
        templateUrl: 'inventory/inventory.html',
        controller: 'InventoryController',
        controllerAs: 'Inventory'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'cart/cart.html',
        controller: 'CartController',
        controllerAs: 'Cart'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'Contact'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'AboutController',
        controllerAs: 'About'
      })
  }

})();
