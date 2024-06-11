//Given a number of steps n, write a function to determine the number of distinct ways to climb to the top, taking 1 or 2 steps at a time.	
let steps = 7
let possibleComos = [[]]; // for adding 1s only
let result = []; //for adding prefect sum combos

//moving 1s
for(let i=0; i<steps; i++){
    let combo = [];
    for(let j=i; j<steps; j++){
        combo.push(1)
    }
    possibleComos.push(combo)
}


for(let i=0; i<possibleComos.length; i++){
    let total;

    if (possibleComos[i].length !== 0){  //codition for empty Array
        total = possibleComos[i].reduce((acc,cur)=> acc+cur)
    } 

    if(total===steps){ //moving first item directly
        result.push(possibleComos[i])
    }

    if(total<steps){  //moving remaing items
        let twoRequired = ((steps-total)/2);
        if(Number.isInteger(twoRequired)){
            let added = addTwos(possibleComos[i], twoRequired);
            result.push(added);           
        }         
    }

    if(total === undefined){  //adding twos to empty array
        if(steps%2===0){
            let added = addTwos(possibleComos[i], steps/2);
            result.push(added); 
        }
    }
}

function addTwos(arr, count){  //fun for add twos to equal sum
    for(let i=0; i<count; i++){
        arr.push(2)
    }
    return arr;
}

function findElement(arr, target){  //fun to finds no of 1s and 2s
    let result = arr.filter(ele=> ele===target)
    return result;
}

function factorial(ele){ //fun to find factorial to use in formula
    if(ele===1){
        return 1
    }
    return ele * factorial(ele-1) 
}

let count = 0;

for(let i=0; i<result.length; i++){
    let element = result[i][0]
    let isSame = result[i].every(ele=> {return ele===element})
    if(isSame){
        count+= 1
    }
     else{
         let twos = findElement(result[i], 2)
         let ones = findElement(result[i], 1)
         
         count += factorial((result[i].length))/ (factorial(twos.length) * factorial(ones.length))

     }
    
}

console.log(count)
