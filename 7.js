//Given a string containing '(', ')', '{', '}', '[', and ']', determine if it is valid. A string is valid if brackets are closed in the correct order and match their types.	
function isValidParanthasis(string){
  let stack = [];
  let matching = {")": "(", "]":"[", "}":"{"}
  for(let i=0; i<string.length; i++){
    if( string[i]==="(" || string[i]==="{" || string[i]==="["){
      stack.push(string[i])
    }
    else if(stack.length===0 || stack.pop() !== matching[string[i]]){
      return false     
      
      
    }
  }
  if(stack.length ===0){
    return true;
  }
  else{
    return false
  }
  }
  
  let str = "(()[]{})";
  console.log(isValidParanthasis(str))