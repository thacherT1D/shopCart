(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('InventoryController', InventoryController);

    InventoryController.$inject = ['InventoryService', 'CartService'];

    function InventoryController(InventoryService, CartService) {
      var vm = this;
      vm.inventory = [];
      InventoryService.getInventory().then(function(inventory) {
        vm.inventory = inventory;
        InventoryService.getTeaCategories().then(function(teaCategories) {
          vm.teaCategories = teaCategories;
        })
      });

      vm.cart = CartService.getCart();

      vm.addToCart = function(item, quantity) {
        CartService.addToCart(item, quantity);
      }


    }
})();
