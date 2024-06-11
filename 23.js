//Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

function editDisatnce(word1, word2){
    let required = ''
    for(let i=0; i<word1.length; i++){
        if(word2.includes(word1[i])){
            required += word1[i]
        }

    }

    for(let i=0; i<required.length; i++){

    }
}

let word1 = 'horse';
let word2 = 'ros';
console.log(editDisatnce(word1, word2))
// ros ors
