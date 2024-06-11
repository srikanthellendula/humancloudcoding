//Given a string, find the character that appears the most frequently. If multiple characters have the same frequency, return any one of them.
function frequentCharacter(string){
    let charCount = {}
    for (let i of string){
        if(i in charCount){
            charCount[i]= charCount[i]+1
        }
        else{
            charCount[i] = 1
        }
    }
    count = 0
    mostFrequent = ''
    for (let i in charCount){
        if (charCount[i]> count){
            count = charCount[i];
            mostFrequent = i;
        }
    }

    return mostFrequent

}

let word = frequentCharacter('aabbbc');
console.log(word)