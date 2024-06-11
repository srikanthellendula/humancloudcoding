function largestSum(arr){
    if(arr.length<3){
        if(arr.length===0){
            return "Array has zero elements "
        }
        let sum =  arr.reduce((acc,cur)=>{return acc+cur})
        return sum
    }
    else{
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr.length; j++){
                if(arr[i]>arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
    
            }
        }
     let sum = arr[0]+arr[1]+arr[2];
     return sum
    }
    

}

let result = largestSum([])
console.log(result)

