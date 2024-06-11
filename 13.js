//Write a function that transforms a given string into a "numero name". The output should be the first character, the number of characters between the first and last characters, and the last character. Subsequent queries should reduce the number by 1.	
function numeroName(string){
    let firstChar =  string[0].toLowerCase();
    let lastChar = string[string.length-1].toLowerCase();
    let count = string.length-1
    let result = firstChar+count+lastChar;
    return result;
    
}

let str = 'India'
console.log(numeroName(str))