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
      .when('/about', {
        controller: 'AboutController',
        controllerAs: 'About',
        templateUrl: 'about/about.html'
      })
      .when('/contact', {
        controller: 'ContactController',
        controllerAs: 'Contact',
        templateUrl: 'contact/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
