// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.
const coffeeMenu = require("./coffee_data_starter")

// Prompt 2:
// Print an array of all the drinks.
const drinkMenu = (item) => {
    return item.name;
}
console.log("\nOur full drink menu");
console.table(coffeeMenu.map(drinkMenu));

// Prompt 3
// Print an array of drinks that cost 5 and under.
const fiveAndUnder = (item) => {
    return item.price <= 5;
}
console.log("\nOur menu of drinks $5 and under");
console.table(coffeeMenu.filter(fiveAndUnder));


// Prompt 4
// Print an array of drinks that are priced at an even number.
const evenPriced = (item) => {
    return item.price % 2 === 0;
}
console.log("\nOur menu of drinks that are priced at an even number");
console.table(coffeeMenu.filter(evenPriced));

// Prompt 5
// Print the total if you were to order one of every drink.
const prices = (item) => {   
    return item.price;
};

const priceArray = coffeeMenu.map(prices)

const sumTotal = ((accumulator, currentValue) => {
    return accumulator + currentValue
});

const totalPrice = priceArray.reduce(sumTotal);
console.log(`\nIf you bought one of every drink, your total would be $${totalPrice}`);


// Prompt 6
// Print an array with all the drinks that are seasonal.
const seasonalList = (item) => {
    return item.seasonal;
}

const seasonalMenu = coffeeMenu.filter(seasonalList)

console.log("\nOur seasonal menu");
console.table(seasonalMenu);

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"
seasonalMenu.forEach((item) => {
    console.log(`\n ${item.name} with imported beans`)
})