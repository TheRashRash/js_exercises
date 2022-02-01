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

let now = new Date();
let day = now.getDay();

switch(day) {
    case 0:
        console.log(`Sunday`);
        break;
      case 1:
        console.log(`Saturday`);
        break;
      case 2:
        console.log(`Monday`);
      case 3:
      case 4:
      case 5:
      case 6:
      default:
        console.log(`Please enter a valid range.`)
      // code block
  }