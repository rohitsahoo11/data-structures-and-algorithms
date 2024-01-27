// Question 11
// Intersection of Two Sorted Array

function Intersection(arr1,arr2){
    let i = 0
    let j = 0
    let intersection = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            i++
        }
        else if(arr2[j] < arr1[i]){
            j++
        }
        else{
            intersection.push(arr1[i])
            i++
            j++
        }
    }
    return intersection
}

const arr1 = [1,2,2,3,3,4,5,6]
const arr2 = [2,3,3,5,6,6,7]
console.log(Intersection(arr1,arr2))