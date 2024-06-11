//Given 8 balls, where 7 have equal weight and 1 is heavier, determine the minimum number of iterations to find the heavy ball.	
let arr = [1,1,1,1,1,1,1,2];

let part1 = arr.slice(0,3,0);
let part2 = arr.slice(3,6,0);
let part3 = arr.slice(6,8,0);

let sum1 = part1[0]+part1[1]+part1[2];
let sum2 = part2[0]+part2[1]+part2[2];

if( sum1 === sum2){
     if(part3[0]>part3[1]){
        console.log(part3[0]);
     }
     else{
        console.log(part3[1])
     }
}
else{
    if(sum1>sum2){
        if(part1[0]===part1[1]){
            console.log(part1[2])
        }
        else if(part1[1]===part1[2]){
            console.log(part1[0])
        }
        else{
            console.log(part1[1])
        }

    }
    else{
        if(part2[0]===part2[1]){
            console.log(part2[2])
        }
        else if(part2[1]===part2[2]){
            console.log(part2[0])
        }
        else{
            console.log(part2[1])
        }

    }

}