class InventoryService {
  constructor($http) {
    this.$http = $http;
    this.inventory = [];

    this.$http({
      url: '/inventory',
      method: 'GET'
    }).then((res) => {
      this.inventory = res.data;

      // console.log(res);
    }).catch((err) => {
      return err;
    });
  }
  getFishes() {
    return this.inventory;
  }
}

InventoryService.$inject = ['$http'];

export default InventoryService;



(function () {
  'use strict'

  angular
    .module('shopCart')
    .factory('InventoryService', InventoryService);

  function InventoryService($http, $q) {
    var inventory = [];
    var teaCategories = [];
    var finalTeaCategories = [];
    var resolvedData = false;
    return {
      getInventory: function () {
        if(inventory.length == 0 && !resolvedData) {
          return $http.get('/inventory').then(function(result) {
            inventory = result.data;
            resolvedData = true;
            return inventory;
          });
        } else {
          return $q(function (resolve, reject) {
            resolve(inventory);
          });
        }
      },
      getTeaCategories: function () {
        if(teaCategories.length == 0 || !resolvedData) {
          return this.getInventory().then(inventory => {
            for (var i = 0; i < inventory.length; i++) {
              for (var j = 0; j < inventory[i].categories.length; j++) {
                teaCategories.push(inventory[i].categories[j])
              }
            }
            teaCategories = [...new Set(teaCategories)];
            return teaCategories;
          });


        } else {
          return $q(function (resolve, reject) {
            resolve(teaCategories);
          })
        }
      }
    }
  }
})();
