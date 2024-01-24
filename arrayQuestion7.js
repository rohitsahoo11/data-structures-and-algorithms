// Array Question 7
// Left rotate the array by D place

function LeftRotateArray(arr,d){
    let n = arr.length

    reverseArray(arr,0,d-1)

    reverseArray(arr,d,n-1)

    reverseArray(arr,0,n-1)

    return arr
}

// Reversing the whole Array

function reverseArray(arr,start,end){
    while(start<end){
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
const array = [1,2,3,4,5,6,7]
const rotation = 3
const rotatedarray = LeftRotateArray(array,rotation)
console.log(rotatedarray)