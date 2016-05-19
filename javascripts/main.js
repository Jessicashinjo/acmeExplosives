// (function () {
  "use strict";

  var sum = '';
  var total = '';
  var newTotal = '';
  var cardHTML = "";

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
        emptyCardWrapper();
        insertProducts(event, typesArray, productsArray);
      });
    });
  }

  function emptyCardWrapper (){
    cardHTML = "";
    $('#productWrapper').empty();
  }

  function insertProducts(event, typesArray, productsArray){
    var currentTypeId = event.currentTarget.id;
    var product = $.each(productsArray.products, function(key, value){
      return [value];
    });
    $.each(product, function(key, value){
      for(var prod in value){
        if ( currentTypeId === `type${value[prod].type}`) {
          cardHTML += `<section class="currentProduct">
                          <div class="productName">
                          <h3>${value[prod].name}</h3>
                          </div>
                            <div class="idPlusType">
                            <p class="productId">Id: ${value[prod].id}</p>
                            <p class="productType">Type: ${value[prod].type}</p>
                          </div>
                          <div class="productDescription">
                            <h5>Description:</h5>
                            <p class="description">${value[prod].description}</p>
                          </div>
                        </section>`;
          $('#productWrapper').html(cardHTML);
        };
      };
    });
  }
    productInfo.getJSONFile();
// }());

