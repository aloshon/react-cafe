function unroll(squareArray) {
    let total = squareArray[0].length ** 2;
    const checker = () => {
        if(result[result.length-1] === undefined){
            result.pop()
        }
    }
    
    let result = []
    while(result.length < total){
        // top
        result = result.concat(squareArray.shift());

        // all the right side
        for(let i = 0; i < squareArray.length - 1; i++){
            result.push(squareArray[i].pop())
        }

        // bottom
        let bottom = squareArray.pop();

        // if there is no bottom, then squareArray is not a matrix anymore
        if(bottom === undefined){
            result = result.concat(squareArray);
            checker()
            return result
        }
        let reversed = [];
        for(let i = bottom.length - 1; i >= 0; i--) {
            reversed.push(bottom[i]);
        }
        result = result.concat(reversed);

        // left side
        for(let i = squareArray.length - 1; i >= 0; i--){
            result.push(squareArray[i].shift())
        }
    }

    checker()
    return result;
}

module.exports = unroll;
