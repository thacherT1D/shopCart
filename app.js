angular
  .module('shopCart', [
    'ngRoute',
    'customFilters'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'InventoryController',
        controllerAs: 'Inventory',
        templateUrl: 'inventory/inventory.html',
      })
      .when('/cart', {
        controller: 'CartController',
        controllerAs: 'Cart',
        templateUrl: 'cart/cart.html'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
