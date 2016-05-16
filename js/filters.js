angular
  .module('customFilters', [])
  .filter('true_false', function() {
    return function(input) {
      if (input === true) {
        return 'Yes';
      }
    }
    return 'No';
  })
  .filter('unique', function() {
   return function(collection, keyname) {
      var output = [],
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});
