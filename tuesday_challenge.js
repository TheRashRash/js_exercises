`use strict`

// fizzbuzz challenge
for(let i = 0; i <= 100; i++){
    if ((i % 5 == 0) && (i % 3 == 0)){
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    }
}


// 99 green bottles 

a = 99;

while (a >= -1){
    if(a >= 1){
        console.log(`${a} bottles of beer on the wall, ${a} bottles of beer. Take one down, pass it around, ` + (a - 1) + " bottle of beer on the wall.");
    } else if (a == 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    a--; 
} 

