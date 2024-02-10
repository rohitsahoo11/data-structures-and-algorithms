// Question 19
// Kadane's Algorithm, Maximum Subarray

//Brute Approach
// function maxSubarray(arr){
//     let maxi = -Infinity
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             let sum = 0
//             for(let k = i; k <= j; k++){
//                 sum += arr[k]
//                 maxi = Math.max(sum, maxi)
//             }
//         }
//     }
//     return maxi 
// }


// Better Approach
// function maxSubarray(arr){
//     let maxi = -Infinity
//     for(let i=0;i<arr.length;i++){
//         let sum = 0
//         for(let j=i;j<arr.length;j++){
//             sum += arr[j]
//             maxi = Math.max(sum, maxi)
//         }
//     }
//     return maxi
// }

// Optimal Approach
function maxSubarray(arr){
    let sum = 0
    let maxi = -Infinity
    for(let i=0; i<arr.length;i++){
        sum += arr[i]

        if(sum > maxi){
            maxi = sum
        }

        if(sum < 0){
            sum = 0
        }
    }
    return maxi
}

let array = [5,4,-1,7,8]
console.log(maxSubarray(array))