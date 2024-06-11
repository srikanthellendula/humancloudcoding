//Given a map, sort it by its values and return the sorted map.	
function sortedMap(map){
    let values = []
    for(let item in map){
        values.push([item, map[item]])
    }
    
    for(let i=0; i<values.length; i++){
         for(let j=0; j<values.length; j++){
            if(values[i][1]<values[j][1]){
                let temp = values[i];
                values[i] = values[j];
                values[j] = temp
            }
         }
    }
     let result ={};
     for(let i of values){
        result[[i][0]] = i[1]
     }

     return result
}

let map = { "a": 3, "b": 1, "c": 2, "d":1 , "e": -1}
console.log(sortedMap(map));