/*
for(let a = 100; a <= 200; a++){
    console.log(`a = ${a}`);
}
*/

// for(let a = 100; a <= 200; a++){
//     if (a % 2 == 0){
//         console.log("-");
//     } else {
//         console.log("*");
//     }
// };


//for (let i = 1; i <= 10; i ++) {
//    for (let j = 1; j <= 10; j ++){
//        console.log(j);
//    }
//}

// let now = new Date();
// let day = now.getDay();

// switch(day) {
//     case 0:
//         console.log(`Sunday`);
//         break;
//       case 1:
//         console.log(`Saturday`);
//         break;
//       case 2:
//         console.log(`Monday`);
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//       default:
//         console.log(`Please enter a valid range.`)
//       // code block
//   }

age = 0;

if (18 <= age <= 65) {
    console.log("Age is in range");
  } else if (age < 18) {
    console.log("Underage");
  } else {
    console.log("Catch all else");
  }

// switch (age) {
//     case ((age == true) && (18 <= age <= 65)):
//         console.log("You are the right age!");
//         break;
//     case ((age == true) && !(18 <= age )):
//         console.log("You are underage!");
//         break;
//     case ((age == true) && !(65 >= age)):
//         console.log("You are unfortunately in the wrong category...");
//         break;
//     case (age == false):
//         console.log("No age.");
//         break;

//     }   

let x = age >= 50 ? 'You are over 50' : "You are under 50";