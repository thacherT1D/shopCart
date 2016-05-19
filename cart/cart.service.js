(function () {
  'use strict'

  angular
    .module('shopCart')
    .factory('CartService', CartService);


  function CartService() {
    var cart = [];
    var subtotal;
    return {
      addToCart: function (item, quantity) {
        var inCart = false;
        for (var i = 0; i < cart.length; i++) {
          if(item == cart[i].item) {
            cart[i].quantity += quantity;
            inCart = true;
          }
        }
        if(inCart == false) {
          cart.push({"item": item, "quantity": quantity});
        }
      },
      getCart: function() {
        return cart;
      },
      cartSubtotal: function() {
        subtotal = 0;
        for (var i = 0; i < cart.length; i++) {
          subtotal += ((cart[i].item.price)*(cart[i].quantity));
        }
        return subtotal;
      },
      deleteItem: function(item) {
        cart.splice(cart.indexOf(item),1);
      }
    }
  }
})();
