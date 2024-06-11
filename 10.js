//Given a string, find the word that occurs the most frequently.	
function frequentWord(sentence){
    let words = sentence.split(' ');
    let count = {}
    for(let i of words){
        if(i in count){
            count[i]+= 1;
        }
        else{
            count[i] = 1;
        }
    }
    
    let mostCount = 0;
    let freqWord = ''

    for(let item in count){
        if(count[item]>mostCount){
            mostCount = count[item];
            freqWord = item;
        }
    }

    return freqWord

}

let sen = "the quick brown fox jumps over the lazy dog the quick";
console.log(frequentWord(sen));