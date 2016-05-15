angular
  .module('inStockFilter', []).filter('true_false', function() {
    return function(input) {
      if (input === true) {
        return 'Yes';
      }
    }
    return 'No';
  });
