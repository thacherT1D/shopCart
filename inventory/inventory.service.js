(function () {
  'use strict'

  angular
    .module('shopCart')
    .factory('InventoryService', InventoryService);

  function InventoryService($http, $q) {
    var inventory = [];
    var resolvedData = false;
    return {
      getInventory: function () {
        if(inventory.length == 0 && !resolvedData) {
          return $http.get('inventory/inventory.json').then(function(result) {
            inventory = result.data;
            resolvedData = true;
            return inventory;
          });
        } else {
          return $q(function (resolve, reject) {
            resolve(inventory);
          });
        }
      }
    }
  }
})();
