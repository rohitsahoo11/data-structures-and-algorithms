// Question 10
// Union of two sorted Array

function unionOfSortedArray(arr1, arr2){
    const union = []
    let i = 0
    let j = 0

    while(i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            union.push(arr1[i])
            i++
        }
        else if(arr1[i] > arr2[j]){
            
            union.push(arr2[j])
            j++
        }
        else{
            union.push(arr1[i])
            i++
            j++
        }
    }
    while(i < arr1.length){
        union.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        union.push(arr2[j])
        j++
    }
    return union
}

const arr1 = [1,2,4,6,8]
const arr2 = [1,3,5,7]
console.log(unionOfSortedArray(arr1,arr2))
