"use strict";

var dropDownList = document.getElementById('dropDown');
var sum = '';

function insertCategories(rawCategories){
  console.log(rawCategories);
  var categoriesArray = $.map(rawCategories, function(value, index){
    console.log([value]);
    return [value];
  });
  console.log(categoriesArray[0]);
  categoriesArray[0].forEach(function(category){
    sum += `<li><a href="#">${category.name}</li>`;

  });
  dropDownList.innerHTML = sum;
}

productInfo.getJSONFile();




// <li><a href="#">Action</a></li>
// <li><a href="#">Another action</a></li>
// <li><a href="#">Something else here</a></li>
