//Given a 2D board and a word, find if the word exists in the grid.	

function findWord(arr, word){
    let find='';
    for(let i=0; i<word.length; i++){
         loop1: for(let j=0; j<arr.length; j++){
            for(k=0; k<arr[j].length; k++){
                if(arr[j][k]===word[i]){
                    find += word[i]
                    break loop1;
                }
            }
         }
    }
    if(word===find){
        return true;
    }
    else{
        return false;
    }


}

let arr = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
let word = "ABCCED"

console.log(findWord(arr, word))