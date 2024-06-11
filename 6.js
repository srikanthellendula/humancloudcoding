//Write a function to convert a string of digits to an integer withiut type casting and parsing functions

function stringToInteger(string){
    let num = 0;
    for(let i of string){
         if(!isNaN(i)){
            i = (i * 1);
            num = (num*10)+ i
         }

     }
     return typeof num
}

console.log(stringToInteger('1234567'));
