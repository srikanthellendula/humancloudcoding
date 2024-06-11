//Write a function to find a target element in a sorted 2D array.	
function targetElement(array, target){
    let result = false
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length; j++){
            if(array[i][j]===target){
                result=true 
            }
        }
    }
    return result

}

let array =  [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]];
let target = 10;
console.log(targetElement(array, target))