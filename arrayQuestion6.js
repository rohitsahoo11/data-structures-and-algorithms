// Array Question 6
// Left Rotate the Array by One Place?

function leftRotate(arr){
    firstToLast = arr[0]
    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = firstToLast
    return arr
}
let array = [1,2,3,4,5]
console.log(leftRotate(array))
