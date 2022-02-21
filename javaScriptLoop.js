// Array Iterations:
// forEach Loop: 
let a = [1, 2, 3, 4, 5, 6];
a.forEach(function(item, index){
  console.log(item, index);
});


// map Loop: 
let b = [1, 2, 3, 4, 5, 6];
let c = b.map(function(item){
  return item * 2;
});
console.log(c);

// fiter Loop: 
let d = [1, 2, 3, 4, 5, 6];
let filtered_items = d.filter(function(item){
  return item % 2 === 0;
});
console.log(filtered_items);

// reduce Loop: 
let e = [1, 2, 3, 4, 5, 6];
let sum = e.reduce(function(result, item){
  return result + item;
}, 0);
console.log(sum);

// some Loop: 
let f = [1, 2, 3, -4, 5, 6];
let hasNegativeValue = f.some(function(item){
  return item < 0;
});
console.log(hasNegativeValue);

// some Loop: 
let g = [1, 2, 3, -4, 5, 6];
let allPositive = g.every(function(item){
  return item > 0;
});
console.log(allPositive);

// find Loop: 
let h = [1, 2, 3, -4, 5, 6];
let found = h.find(function(item){
  return item === -4;
});
console.log(found);

// find index: 
let i = [1, 2, 3, -4, 5, 6];
let foundIndex = h.findIndex(function(item){
  return item === -4;
});
console.log(foundIndex);

