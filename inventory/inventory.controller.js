(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('InventoryController', InventoryController);

  function InventoryController(InventoryService) {
    var vm = this;
    vm.inventory = [];
      InventoryService.getInventory().then(function(inventory) {
        vm.inventory = inventory;
      })

  }
})();
