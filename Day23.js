function organizeChristmasDinner(dishes) {
  const ingredientMap = new Map();
  for (const dish of dishes) {
    const dishName = dish[0];
    for (let i = 1; i < dish.length; i++) {
      const ingredient = dish[i];
      if (!ingredientMap.has(ingredient)) {
        ingredientMap.set(ingredient, [dishName]);
      } else {
        ingredientMap.get(ingredient).push(dishName);
      }
    }
  }
  const filteredIngredients = Array.from(ingredientMap.entries())
    .filter(([_, dishes]) => dishes.length > 1)
    .sort();
  const result = filteredIngredients.map(([ingredient, dishes]) => {
    const sortedDishes = dishes.sort();
    return [ingredient, ...sortedDishes];
  });
  return result;
}

// Test:
// console.log(organizeChristmasDinner([
//     ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
//     ["mashed potatoes", "potatoes", "butter", "milk"],
//     ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
//     ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
//   ]))

// Expected:
// [
//   [
//     "butter",
//     "cinnamon rolls",
//     "mashed potatoes",
//     "turkey stuffing"
//   ],
//   [
//     "cinnamon",
//     "cinnamon rolls",
//     "pumpkin pie"
//   ],
//   [
//     "flour",
//     "cinnamon rolls",
//     "pumpkin pie"
//   ],
//   [
//     "sugar",
//     "cinnamon rolls",
//     "pumpkin pie"
//   ]
// ]

// Actual:
// [
//   [
//     "butter",
//     "cinnamon rolls",
//     "mashed potatoes",
//     "turkey stuffing"
//   ],
//   [
//     "cinnamon",
//     "cinnamon rolls",
//     "pumpkin pie"
//   ],
//   [
//     "flour",
//     "cinnamon rolls",
//     "pumpkin pie"
//   ],
//   [
//     "sugar",
//     "cinnamon rolls",
//     "pumpkin pie"
//   ]
// ]
