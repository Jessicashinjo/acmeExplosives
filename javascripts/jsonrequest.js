"use strict";

var productInfo = (function(productInfo){
  var categories = [];
  var types = [];
  var products = [];

  function categoriesPromise(){
    return new Promise(function(resolve, reject){
      $.ajax("/javascripts/categories.json")
        .done(function(data){
          resolve(data);
        })
        .fail(function(request, textStatus, errorThrown){
          reject(errorThrown);
        });
    });
  }

  function typesPromise(){
    return new Promise(function(resolve, reject){
      $.ajax("/javascripts/types.json")
        .done(function(data){
          resolve(data);
        })
        .fail(function(request, textStatus, errorThrown){
          reject(errorThrown);
        });
    });
  }

  function productsPromise(){
    return new Promise(function(resolve, reject){
      $.ajax("/javascripts/products.json")
        .done(function(data){
          resolve(data);
        })
        .fail(function(request, textStatus, errorThrown){
          reject(errorThrown);
        });
    });
  }

  productInfo.getJSONFile = function(){
    categoriesPromise().then(function(catData){
      categories = catData;
      insertCategories(categories);
      return typesPromise();
    }).then(function(typesData){
      types = typesData;
      insertTypes(categories, types);
      return productsPromise();
    }).then(function(prodData){
      products = prodData;
      eventHandlerForTypes(types, products);
      return products;
    });
  };

  return productInfo;

})(productInfo || {});
