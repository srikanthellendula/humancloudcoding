//Write a function to check if a given string is a palindrome without using a temporary string.	

function palindrome(str){
    let left = 0;
    let right = str.length-1;
    let mid = Math.floor(str.length/2)
    let count = 0;
    for(let i=0; i<mid; i++){
        if(str[left]===str[right]){
            count += 1;
            left+= 1;
            right -= 1;
        }
        else{
            return false;
        }

    }
    if(count === mid){
        return true
    }

     

}

console.log(palindrome('abkcba'))