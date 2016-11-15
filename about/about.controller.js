(function () {
  'use strict'

  angular
    .module('shopCart')
    .controller('AboutController', AboutController);


      function AboutController ($scope) {
        var vm = this;
        $scope.title = 'about';
      }
})();
