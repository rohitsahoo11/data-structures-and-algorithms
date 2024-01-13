// Array Question 2
// Find the Maximum in an Array

function maxElement(arr){
    let max = arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
let arr2 = [11,32,23,43,9]
console.log(maxElement(arr2))