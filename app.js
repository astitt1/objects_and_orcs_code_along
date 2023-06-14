//USe array inside an object

const adventurer = {
    name: "Azreal",
    hitPoint: 10,
    belongings: ["staff", "potions", "medicine"],
    companion: {
        name: "stinky",
        type: "Cat"
    }
}

console.log(`My companions name is ${adventurer.companion.name}`);

//access the values in the array

// console.log(adventurer.belongings)

//access the first belonging

// console.log(` first belonging: ${adventurer.belongings[0]}`);

//iterate over an array inside of an object

// for(let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i])
// }

// #1 OBJ within OBJ


