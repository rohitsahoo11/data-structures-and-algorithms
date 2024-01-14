// Array Question 4
// check if the array is sorted

function isSorted(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }        
    }
    return true
}

let arr2 = [1,3,47,34,57,89]
let arr3 = [2,4,3,5,6,788,7]
let arr4 = [1,2,3,4,5,6]

console.log(isSorted(arr2))
console.log(isSorted(arr3))
console.log(isSorted(arr4))