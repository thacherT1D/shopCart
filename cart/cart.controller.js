(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('cartController', cartController) {
      function CartController(CartService) {
        var vm = this;
        vm.cart = CartService.getCart();
      }
    })
})();
