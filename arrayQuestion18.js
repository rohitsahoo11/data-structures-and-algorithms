// Question 18
// majority Element (>N/2 times)

// Brute Approach
// function majority(arr){
//     let len = (arr.length)/2
//     for(let i = 0; i<arr.length;i++){
//         let count = 0
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]===arr[i]){
//                 count++
//             }
//         }
//         if(count > len) return arr[i]
//     }
//     return -1
// }


// Better Approach
// function majority(arr){
//     let mapp = new Map()
//     let maxCount = 0
//     let majorityEle = -1
//     let len = (arr.length)/2

//     for(let i=0;i<arr.length;i++){
//         if(mapp[arr[i]]=== undefined){
//             mapp[arr[i]] = 1
//         }
//         else{
//             mapp[arr[i]]++
//         }
//         if(mapp[arr[i]]> maxCount){
//             maxCount = mapp[arr[i]]
//             majorityEle = arr[i]
//         }
//         if(maxCount > len){
//             return majorityEle
//         }
//     }
//     return majorityEle
// }


// Optimal Approach
function majority(arr){
    let len = (arr.length)/2
    let count = 0
    let ele;

    for(let i = 0;i<arr.length;i++){
        if(count === 0){
            ele = arr[i]
            count = 1
        }
        else if(arr[i] === ele){
            count++
        }
        else{
            count--
        }
    }
    let count1 = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === ele){
            count1++
        }
    }
    if(count1 > len){
        return ele
    }
    return -1
}
let array = [2,2,3,3,3,3,2]
console.log(majority(array))