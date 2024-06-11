//Given an array of integers, find all elements that appear twice.	
function duplicate(arr){
    let dup = [];
    let chars = {}
    for(let i=0; i<arr.length; i++){
        if(arr[i] in chars){
            chars[arr[i]] += 1
        }
        else{
            chars[arr[i]] = 1
        }
    }

    for(let i in chars){
        if(chars[i]>1){
            dup.push(parseInt(i))
        }
    }
    return dup


}

let arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(duplicate(arr))