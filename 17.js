//Merge two sorted arrays into one sorted array.	

function arraysMerge(arr1, arr2){
     let arr = [...arr1, ...arr2]
     for(let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if(arr[i]<arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
     }
     return arr
}

let arr1 = [1,3,4,9];
let arr2 = [5,2,6];

console.log(arraysMerge(arr1, arr2))