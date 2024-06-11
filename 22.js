// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring. 
//Given a string containing '(', ')', '{', '}', '[', and ']', determine if it is valid. A string is valid if brackets are closed in the correct order and match their types.	
function isValidParanthasis(string){
    let count =0;
    let stack = [];
    let matching = {")": "(", "]":"[", "}":"{"}
    for(let i=0; i<string.length; i++){
      if( string[i]==="(" || string[i]==="{" || string[i]==="["){
        stack.push(string[i])
        // console.log(stack)
      }
      else{
        if(stack.pop() !== matching[string[i]]){
            stack.pop()
            console.log(stack)
          }
        else{
            count += 1
        }

      } 
        
      }
    // console.log(stack)
    return string.length-stack.length
     
    }
    
    let str = "()[]{}]";
    console.log(isValidParanthasis(str))