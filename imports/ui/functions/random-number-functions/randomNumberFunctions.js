export const createSetOfUniqueRandomNumbers = function generateRan(max, numberOfElements){

    let arrayOfUniqueRandoms = [];
    for(let i = 0;i<numberOfElements ; i++){
        let temp = Math.floor(Math.random()*max) + 1;
        if(arrayOfUniqueRandoms.indexOf(temp) == -1){
            arrayOfUniqueRandoms.push(temp);
        }
        else
         i--;
    }
    return arrayOfUniqueRandoms
}

export const createRandomNumberWithinRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}