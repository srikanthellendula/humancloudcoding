//Given an array of distinct integers and a target, return all unique combinations that sum up to the target.	
function cominationSum(arr, sum){
    let modified = []
    let result = []

    for(let i=1; i<=sum; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]<=sum && arr[j]*i<=sum){
                modified.push(arr[j])
            }
        }
    }

    modified = modified.sort((a,b)=>a-b);
    
    for(let i=0; i<modified.length; i++){
        let mainPart = modified.slice(0,i+1);
        for(let j=0; j<mainPart.length; j++){
            let subPart = mainPart.slice(-j-1, mainPart.length);
            let total = subPart.reduce((acc, curr)=> acc+curr);
            if(total===sum){
                result.push(subPart)
            }            
        }
    }
    return result;    
}

let arr = [2,3,6,7];
let sum = 7;
const result = cominationSum(arr,sum)
console.log(result)


