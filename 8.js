//Given an array of strings, find the longest common prefix. If there is no common prefix, return an empty string.	

function longestPrefix(arr){
    let minLength = arr[0].length;
    let prefix = '';

    for(let i of arr){
        if(i.length<minLength){
            minLength = i.length;
        }
    }
    
    for(let i=0; i<minLength-1; i++){
        let count = 0;
        let char = arr[0][i]
        for(let item of arr){
            if(item[i]===char){
                count+=1;
            }
        }
        if(count!==arr.length){
            break;
        }
        else{
            prefix += char
        }
    }
    return prefix

}

let arr = ["flower", "floww", "flowight"]

console.log(longestPrefix(arr))