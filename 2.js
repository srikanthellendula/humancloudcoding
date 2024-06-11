//Write a function to check if a given number is a palindrome.

function palindrome(num){
    let number = num;
    let reverse = 0;
    let temp = number

    while(temp>0){
        let reminder = temp%10;
        temp = Math.floor(temp/10);
        reverse = (reverse*10)+ reminder
    }

    if(number===reverse){
        return true;
    }
    else{
        return false
    }
}

let num = palindrome(12321)
console.log(num)

