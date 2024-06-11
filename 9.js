//Write a function to find all palindrome numbers in a given integer array.	

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

function palindromeList(arr){
    let result = arr.filter(num=>palindrome(num))
    return result
    

}

let palindromeNums = palindromeList([123, 121, 454, 567])
console.log(palindromeNums)

