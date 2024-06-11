//Given n non-negative integers representing an elevation map, find how much water it can trap after raining.

let deep = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

function rainWater(deep){
    count = 0;
    for(let i=0; i<deep.length; i++){
        if(deep[i]>deep[i+1]){
            count += 1;
        }
    }
    return count;

}

console.log(rainWater(deep))