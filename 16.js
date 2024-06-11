//Write a function to calculate the factorial of a given number n.	
function factorial(n){
    if(n===1){
        return 1;
    }
    return n*factorial(n-1)
}
let num = 5;
console.log(factorial(num))