// //USe array inside an object

// const adventurer = {
//     name: "Azreal",
//     hitPoint: 10,
//     belongings: ["staff", "potions", "medicine"],
//     companion: {
//         name: "stinky",
//         type: "Cat",
//         belongings: ["ball of yarn", "healing potions", "health insurance", "satchel of elements"]
//     }
// }

// console.log(`My companions name is ${adventurer.companion.name}`);
// console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`);

//access the values in the array

// console.log(adventurer.belongings)

//access the first belonging

// console.log(` first belonging: ${adventurer.belongings[0]}`);

//iterate over an array inside of an object

// for(let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i])
// }

// #1 OBJ within OBJ


// const movies = [ 
//     { 
//         title: "Tokyo Story" 
//     },  
//     { 
//         title: "Paul Blart: Mall Cop" 
//     }, 
//     { 
//         title: "L'Avventura" 
//     } 
// ];

// console.log(movies[0].title) //object

// // Looping over array of objects

// for(let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }

