//Generate the first n numbers in the Fibonacci sequence.	
function fibanocci(num){
    let num1 = 0;
    let num2 = 1;
    let fibList = [0, 1]
    if (num === 0){
        return [0];
    }
    else if(num===1){
        return [0,1];
    }
    else{
        for(let i=0; i<num-2; i++){
            let sum = num1+ num2;
            num1 = num2;
            num2 = sum;
            fibList.push(sum)
        }
        

    }
    return fibList

}

console.log(fibanocci(5))