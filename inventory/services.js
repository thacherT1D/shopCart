angular
  .module("buildingshit")
  .factory('categories', function() {
    var categoryList = {};

    categoryList


    return {

    }
  })
  .factory("checkout", function() {
    var CheckoutBag = {};

    CheckoutBag.checkoutBag = [];

    CheckoutBag.addItem = function(item) {
      $scope.cart.push({
        "_id": item._id,
        "name": item.name,
        "__v": item.__v,
      })
    };

    CheckoutBag.removeItem = function () {

    };

    CheckoutBag.editItem = function () {

    };

    return CheckoutBag;


  });
