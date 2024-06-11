function targetSum(arr, sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===sum){
                return [i,j]
            }
        }
    }

}

let array = [2,3,5,7,9,12];
let sum = 21;
console.log(targetSum(array, sum))