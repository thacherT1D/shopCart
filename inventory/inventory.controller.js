(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('InventoryController', InventoryController);

    InventoryController.$inject = ['InventoryService'];

    function InventoryController(InventoryService) {
      var vm = this;
      vm.inventory = [];
      InventoryService.getInventory().then(function(inventory) {
        vm.inventory = inventory;
        InventoryService.getTeaCategories().then(function(teaCategories) {
          vm.teaCategories = teaCategories;
        })
      });
    }
})();
