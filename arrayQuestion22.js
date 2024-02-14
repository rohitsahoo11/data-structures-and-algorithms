// Question 22
// Next Permutation

function nextPermutation(arr){
    let i = arr.length -2
    while(i>=0 && arr[i] >= arr[i+1]){
        i--
    }

    if(i>=0){
        let j = arr.length -1
        while(j>=0 && arr[j]<= arr[i]){
            j--
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    let left = i + 1
    let right = arr.length - 1
    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}

let array = [3,2,1];
console.log(nextPermutation(array)); 