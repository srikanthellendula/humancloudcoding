//Write a function to add two large numbers represented as strings. Handle overflow conditions.	
function addTwoLargeNumbers(num1, num2){
    let carry = 0;
    let sum = ''
    let greatestLength = 0;
    if(num1.length>num2.length){
        let diff = Math.abs(num1.length - num2.length);
        let add ='';
        while(diff>0){
            add = '0' + add
            diff -= 1
        }
        num2 = add + num2;

    }
    else{
        let diff = Math.abs(num1.length - num2.length);
        let add ='';
        while(diff>0){
            add = '0' + add
            diff -= 1
        }
        num1 = add + num1;
    }
        
    for(let i=num1.length-1; i>-1; i--){
        let total = carry + parseInt(num1[i])+parseInt(num2[i]);
        if(i===0){
            sum = total + sum;
            break;
        }
        if(total > 9){
            carry = Math.floor(total / 10);
        }
        else{
            carry = 0;
        }
        sum = parseInt(total%10) + sum
    } 
    return sum
        
    }

let num1 = "10000";
let num2 = "908";
console.log(addTwoLargeNumbers(num1, num2));
