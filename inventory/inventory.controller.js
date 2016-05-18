(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('InventoryController', InventoryController);


    function InventoryController(InventoryService, CartService) {
      var vm = this;
      vm.inventory = [];
      InventoryService.getInventory().then(function(inventory) {
        vm.inventory = inventory;
        InventoryService.getTeaCategories().then(function(teaCategories) {
          vm.teaCategories = teaCategories;
        })
      });

      // CartService.addItem(vm.quantity).then(function() {
      //
      //
      // })
      vm.increaseQty = function(item, quantity) {
        CartService.addToCart(item, quantity);
      }
    }
})();
