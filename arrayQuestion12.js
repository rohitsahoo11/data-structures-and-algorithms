// Question 12
// Find the Missing Number from an Array.


// Using Sum of Natural Numbers
// function missingNo(arr){
//     let n = arr.length + 1
//     let nSum = (n * ( n + 1))/2
    
//     let s2 = 0
    
//     for(let i=0; i<arr.length;i++){
//         s2 += arr[i]
//     }
//     return (nSum - s2) 
// }

// let array = [1,2,4,5]
// console.log(missingNo(array))

// Using XOR Approach
function missingNo(arr){
    let n = arr.length + 1
    let xor1 = 0
    let xor2 = 0

    for(let i = 0;i<arr.length;i++){
        xor1 = xor1 ^ arr[i]
    }
    for(let i = 0;i<=n;i++){
        xor2 = xor2 ^ n
    }
    return (xor1 ^ xor2)

}
let array = [1,2,3,4,6,7,8]
console.log(missingNo(array))