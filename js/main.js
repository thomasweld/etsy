
// 1. Show me how to calculate the average price of all items.

var allPrices = items.map( function (item) {
  return item.price;
});

console.log(allPrices);

function addItemPrices ( prev, curr) {
  return prev + curr;
}

var priceSum = items.reduce(addItemPrices);

console.log(priceSum);



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
