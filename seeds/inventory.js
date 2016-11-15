/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('inventory').del()
    .then(() => {
      return knex('inventory').insert([
        {
            id: 1,
            name: "Bayard stew",
            ingredients: "concentrated gluten, jewelry, dill, beetle nut, toast",
            caffeineScale: 244,
            price: 1540,
            inStock: true,
            rating: 1,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
            categories: "dark, cold"
          },

          {
            id: 2,
            name: "Incompactness syrup",
            ingredients: "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
            caffeineScale: 49,
            price: 7348,
            inStock: true,
            rating: 2,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
            categories: "awesome"
          },
          {
            id: 3,
            name: "Flexner white tea",
            ingredients: "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
            caffeineScale: 38,
            price: 4991,
            inStock: true,
            rating: 4,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
            categories: "cold"
          },
          {
            id: 4,
            name: "Pressor leaf",
            ingredients: "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
            caffeineScale: 153,
            price: 5496,
            inStock: true,
            rating: 1,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
            categories: "dry, hot, awesome"
          },
          {
            id: 5,
            name: "Flexner veggie tea",
            ingredients: "cream of tartar, eggplant, cake, deer antler",
            caffeineScale: 181,
            price: 2445,
            inStock: true,
            rating: 1,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
            categories: "summer"
          },
          {
            id: 6,
            name: "Topflighter malt",
            ingredients: "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
            caffeineScale: 241,
            price: 4486,
            inStock: true,
            rating: 3,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
            categories: "dry, lucid, warm"
          },
          {
            id: 7,
            name: "Cooking mix",
            ingredients: "flavorings, roasted mushrooms, toast, tumeric",
            caffeineScale: 230,
            price: 6973,
            inStock: true,
            rating: 3,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
            categories: "summer"
          },
          {
            id: 8,
            name: "Cooking stew",
            ingredients: "eggplant",
            caffeineScale: 122,
            price: 6003,
            inStock: true,
            rating: 2,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
            categories: "dry, winter, lucid"
          },
          {
            id: 9,
            name: "Prevenient herb tea",
            ingredients: "cream of tartar, cream of cream, kitchen scraps, flavorings",
            caffeineScale: 196,
            price: 1374,
            inStock: true,
            rating: 3,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
            categories: "lucid, hot"
          },
          {
            id: 10,
            name: "Angular mix",
            ingredients: "hot sauce, lawn clippings, fennel, parsley, quinine",
            caffeineScale: 196,
            price: 4158,
            inStock: true,
            rating: 2,
            imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
            categories: "spring, warm, winter"
          }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('inventory_id_seq', (SELECT MAX(id) FROM inventory));"
      );
    });
};
