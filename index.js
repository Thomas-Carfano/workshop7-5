const coffeeMenu = require('./coffee_data');

//Print an array of all the drinks on the menu.
    //Create an empty array
let drinksMenu = [];
    //Add drinks from data to a drinks menu array
coffeeMenu.forEach((drink) => {
    drinksMenu.push(drink.name);
}); 
console.table(drinksMenu);

//Print an array of drinks that are less than or equal to $5
    //Create function to find cheap drinks
    const drinkPrice = (dprice) => {
        if(dprice.price <= 5){
            return dprice.price;
        }
    }
    //Filter coffeeMenu to show cheap drinks
    const cheapDrinks = coffeeMenu.filter(drinkPrice);
    console.table(cheapDrinks);

//Print an array of drinks that are priced at an even number.
    //Create a function to find drinks with an even price
    const evenPrice = (priceEven) => {
        if(priceEven.price % 2 == 0){
            return priceEven;
        }
    };
    //Filter coffeeMenu to show drinks with an even prices
    const evenDrinks = coffeeMenu.filter(evenPrice);
    console.table(evenDrinks);



//Print the total if you were to order one of every drink.

const sum = coffeeMenu.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  console.log(sum);

//Print an array with all the drinks that are seasonal.
    console.table(coffeeMenu.filter((seasonalDrink) => {
        return seasonalDrink.seasonal === true
    }));

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
let drinksMenu2 = [];
    //Add drinks from data to a drinks menu array
coffeeMenu.forEach((drinkB) => {
    drinksMenu2.push(drinkB.name + ' imported with beans');
}); 
console.table(drinksMenu2);