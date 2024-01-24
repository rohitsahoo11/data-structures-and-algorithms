//Array Question 8
//Move all zeros to the end of the Array


function moveZeroToEnd(arr){
    let nonZero = 0
    

    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            [arr[i],arr[nonZero]] = [arr[nonZero],arr[i]]
            nonZero++
        }
    }
    return arr
}
const inputArray = [1,3,0,5,0,3,5,4,0,7,6]
const moveZero = moveZeroToEnd(inputArray)
console.log(moveZero)