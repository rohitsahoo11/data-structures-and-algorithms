// Question 14
// Find the nuber that appears once and the other twice.

// // using Brute Force Approach
// function appearsOnce(arr){
//     for(let i = 0;i<arr.length;i++){
//         let num = arr[i]
//         let count = 0
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]===num){
//                 count++
//             }
//         }
//         if(count===1){
//             return num
//         }    
//     }
//     return null
// }
// let array = [1,1,2,2,3,3,4,4,5]
// console.log(appearsOnce(array))

// Better Approach
// function appearsOnce(arr){
//     let hash = {}
//     for(let i = 0;i<arr.length;i++){
//         hash[arr[i]] = (hash[arr[i]] || 0) +1
//     }
//     for (let key in hash) {
//         if (hash[key] === 1) {
//             return parseInt(key);
//         }
//     }
//     return null
// }

// Optimal Approach
function appearsOnce(arr){
    let xor = 0
    for(let i = 0;i<arr.length;i++){
        xor = xor ^ arr[i]
    }
    return xor
}
let array = [1,1,2,2,3,3,4,4,5]
console.log(appearsOnce(array))