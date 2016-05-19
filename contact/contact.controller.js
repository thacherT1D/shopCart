(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('ContactController', ContactController);

      function
      ContactController() {
        var vm = this;
        vm.submitForm = function(vm) {
          vm.form = false;
          vm.message = true;
        }
      }
})();
