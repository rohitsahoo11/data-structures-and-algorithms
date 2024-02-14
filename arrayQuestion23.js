// Question 23
// Leader in an array

//Brute Approach
// function leaderInAnArray(arr){
//     let ans = []
    
//     for(let i = 0;i<arr.length;i++){
//         let leader = true
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 leader = false
//                 break
//             }
//         }
//         if(leader === true){
//         ans.push(arr[i])
//     }
//     }
    
//     return ans
// }

// Optimal Approach
function leader(arr){
    let ans = []
    let maxi = -Infinity
    for(let i = arr.length-1;i>=0;i--){
        if(arr[i]>maxi){
            ans.push(arr[i])
        }
        maxi = Math.max(maxi, arr[i])
    }
    return ans
}

let array = [10,22,12,3,0,6]
console.log(leader(array))