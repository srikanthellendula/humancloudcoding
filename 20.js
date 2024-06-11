//Given an array of intervals, merge all overlapping intervals.
function intervals(arr){
    for(let i=0; i<arr.length-1; i++){
         if(arr[i][1]>arr[i+1][0]){
            arr[i] = [arr[i][0],arr[i+1][1]]
            arr.splice(i+1,1)
         }
    }
    return arr
}

let arr = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(intervals(arr))