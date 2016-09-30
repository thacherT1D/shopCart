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
        vm.subtotal = CartService.cartSubtotal();
        vm.save = function(tea) {
          tea.showEdit = false;
          tea.orderQuan = true;
          vm.subtotal = CartService.cartSubtotal();
        };
        vm.edit = function(tea) {
          tea.showEdit = true;
          tea.orderQuan = false;
          vm.subtotal = CartService.cartSubtotal();
        };
        vm.deleteTea = function(tea) {
          console.log(tea);
          CartService.deleteItem(tea);
          vm.subtotal = CartService.cartSubtotal();
        }
      }
})();
