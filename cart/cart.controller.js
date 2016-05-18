(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('CartController', CartController);

    CartController.$inject = ['InventoryService', 'CartService'];


      function
      CartController(InventoryService, CartService) {
        var vm = this;
        vm.cart = CartService.getCart();
      }

})();
