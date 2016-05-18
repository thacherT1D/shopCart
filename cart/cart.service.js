(function () {
  'use strict'

  angular
    .module('shopCart')
    .factory('CartService', CartService);



  function CartService() {
    var cart = [];

    return {
      addToCart: function (item, quantity) {
// check to see if item is already in cart
// if yes, increment quantity

//oterhwise put it in the cart and set the quantity

        cart.push(item);
        console.log(cart);
      }

      getCart : function() {
        
      }


    }
  }
})();
