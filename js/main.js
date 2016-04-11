
// 1. Show me how to calculate the average price of all items.

// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item) {
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce( function (prev, curr) {
  return prev + curr;
});

// Once we have the sum, we can divide by the number (length) of
// items we have
var avg = priceSum / items.length;

// Let's now round that to 2 decimals
var final = avg.toFixed(2);

// Finally, lets build our answer string
var answer1 = "The average price is $" + final;

// Find my "answer" area in the DOM
var answer1Area = document.querySelector('#answer1');

// Put our answer on the page
answer1Area.innerHTML = answer1;

////////////////////////////////////////////////////////////////////////////////

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

// creating a function to determine whether or not an items price falls into
// our price range
function inPriceRange(item){
  return ( item.price >= 14 && item.price <= 18 );
}

// Filtering the items array by way of the inPriceRange function from above
var itemsInPriceRange = items.filter( inPriceRange );

// Mapping the titles of the objects / items in itemsInPriceRange
var itemTitles = itemsInPriceRange.map(function (item){
  return item.title;
});

// Find my "answer" area in the DOM
var answer2Area = document.querySelector('#answer2');

// Put our answer on the page + put each item on new line with .join
answer2Area.innerHTML = itemTitles.join("<br />");

////////////////////////////////////////////////////////////////////////////////

// 3. Which item has a "GBP" currency code? Display it's name and price.
// from items.js --> "currency_code": "GBP",

// creating a function to determine whether or not an item has a currency_code
// of "GBP"
function codeGBP(item){
  return ( item.currency_code === "GBP" );
}

// Filtering the items array by way of the inPriceRange function from above
var itemsWithCodeGBP = items.filter( codeGBP );

// Mapping/storing the titles and prices of the objects / items in new array/variable
// itemTitleAndPrice
var itemTitleAndPrice = itemsWithCodeGBP.map(function (item){
  return ( item.title + " " + item.price);
});

// joining each item in the array with a line break in between for HTML output
var answerOutputFormatted = itemTitleAndPrice.join("<br />")

// Find my "answer" area in the DOM
var answer3Area = document.querySelector('#answer3');

// Put our answer on the page + put each item on new line with .join
answer3Area.innerHTML = answerOutputFormatted;

////////////////////////////////////////////////////////////////////////////////

// 4. Display a list of all items who are made of wood.

// creating a function to determine whether or not an items materials = includes
// "wood"
function materialIsWood( item ){
  return item.materials.indexOf("wood") > 0;
}

// Filtering the items array via materialIsWood function above
var madeWithWood = items.filter( materialIsWood );

// Mapping/storing the titles and prices of the objects / items in new array/variable
// itemTitleAndPrice
var itemTitlesWood = madeWithWood.map(function (item){
  return ( item.title );
});

// Find my "answer" area in the DOM
var answer4Area = document.querySelector('#answer4');

// Put our answer on the page + put each item on new line with .join
answer4Area.innerHTML = itemTitlesWood.join("<br />");

////////////////////////////////////////////////////////////////////////////////

// 5. Which items are made of eight or more materials? Display the name, number
// of items and the items it is made of.

// a function to determine whether or not an item has 8+ materials
var eightMaterialItems = items.filter ( function (item){
  return item.materials.length >= 8;
});

// variable that represents the div on the page where we want the answer to go
var answer5Area = document.querySelector('#answer5');

// for each loop to iterate over items in array created above - eightMaterialItems --> create html elements and insert answers/strings into those elements

eightMaterialItems.forEach( function (item){
  // create pTag and add title inside
  var pTag = document.createElement('p');

  pTag.innerHTML = item.title + 'has ' + item.materials.length + ' materials';
  // append to pTag
  answer5Area.appendChild(pTag);

  // create ulTag for each items materials to go into as li
  var ulTag = document.createElement('ul');

  // iterate over materials in marerials array
  item.materials.forEach( function(material){
    // create li tag
    var liTag = document.createElement('li');
    liTag.innerHTML = material;
    // append my li tag to ul
    ulTag.appendChild(liTag);

  });

  // append my ul tag to my page answer elements
  answer5Area.appendChild(ulTag);
});



////////////////////////////////////////////////////////////////////////////////

// 6. How many items were made by their sellers?
//  "who_made": "i_did",  -- or --
//  "who_made": "someone_else",

// fucntion determines if who_made === "i_did"
function iMade( item ){
  return item.who_made === "i_did";
}

// Filtering the items array via iMade function above
var iMadeArray = items.filter( iMade );

// Tims code >>>>>>>>>>>>>>>>>>>>>
var answer6Area = document.querySelector('#answer6');

// Get in the DOM by creating new elements and appending them
// Create a <p> element
var pTag = document.createElement('p');

// Get my title into that paragagraph.
// using appendChild
// first, though, it has to be a DOM node
var textNode = document.createTextNode( iMadeArray.length + " were made by their sellers");

pTag.appendChild(textNode);
//
// // Now that `para` is a paragraph tag with a
// // title inside of it. Let's put that in my
// // answer field
answer6Area.appendChild(pTag);






////////////////////////////////////////////////////////////////////////////////

// // 1. Show me how to calculate the average price of all items.
//
// var allPrices = items.map( function (item) {
//   return item.price;
// });
//
// console.log(allPrices);
//
// function addItemPrices ( prev, curr) {
//   return prev + curr;
// }
//
// var priceSum = items.reduce(addItemPrices);
//
// console.log(priceSum);



// var animals = ['goat', 'cow', 'horse', 'pig', 'sheep'];
// var shortNames = [];

// animals.forEach ( function(animal) {
//   if (animal.length < 4 ){
//     shortNames.push(animal);
//   }
// });
//

// function findShorts (animal) {
//   if (animal.length < 4 ){
//     shortNames.push(animal);
//   }
// }
//
// animals.forEach ( findShorts );
//
//
// undefined
// shortNames
// ["cow", "pig"]
