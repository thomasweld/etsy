
// 1. Show me how to calculate the average price of all items.

// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item) {
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce(function (prev, curr) {
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
answer2Area.innerHTML = itemTitles.join("<br />");;

////////////////////////////////////////////////////////////////////////////////

// Which item has a "GBP" currency code? Display it's name and price.











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
