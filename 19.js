//Given a string, find the length of the longest substring without repeating characters.

function repeatingChar(string){
    let chars = {}
    for(let i=0; i<string.length; i++){
        if(string[i] in chars){
            chars[string[i]] += 1
        }
        else{
            chars[string[i]] = 1
        }
    }

    let mostRepeat = '';
    let count = 0
    for(let i in chars){
        if(chars[i]>count){
            count = chars[i];
            mostRepeat = i;
        }
    }

    return mostRepeat
     

}

let str = 'abbabfffbbcdeffff'
console.log(repeatingChar(str))