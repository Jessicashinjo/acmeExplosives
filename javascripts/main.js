"use strict";

var sum = '';
var total = '';
var newTotal = '';

function insertCategories(rawCategories){
  var categoriesArray = $.map(rawCategories, function(value, index){
    return [value];
  });
  categoriesArray[0].forEach(function(category){
    sum += `<li id="category${category.id}"><a href="#">${category.name}</li>`;
    $('#dropDown').html(sum);
  });
}

function insertTypes(rawCategories, rawTypes){
  var typesArray = rawTypes.types;

  for (var i = 0; i < typesArray.length; i++) {
    if (typesArray[i].category === rawCategories.categories[0].id) {
      total = `<ul>`;
      total += `<li id="type${typesArray[i].id}"><a href="#">${typesArray[i].name}</a></li>`;
      // console.log("type id #", typesArray[i].id);
      total += `</ul>`;
      $('#category0').after(total);
    } else {
      newTotal = `<ul>`;
      newTotal += `<li id="type${typesArray[i].id}"><a href="#">${typesArray[i].name}</a></li>`;
      newTotal += `</ul>`;
      $('#category1').after(newTotal);
    };
  };
}

function eventHandlerForTypes(typesArray, productsArray){
  typesArray.types.forEach(function(type){
    var typeID = $(`#type${type.id}`);
    typeID.click(function(event){
      insertProducts(event, productsArray);
    });
  });
}

function insertProducts(event, productsArray){
  var currentTypeId = event.currentTarget.id;
  var products = $.each(productsArray.products[0], function(key, value){
    console.log("product");
  });
  // console.log(currentTypeId);
  // for (var i = 0; i < .length; i++) {
  //   console.log(productsArray.products[0]);
  // };
}


  // console.log("type ID", typeID, event);


productInfo.getJSONFile();
