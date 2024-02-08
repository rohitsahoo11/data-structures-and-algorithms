// Question 17
// Sort an Array of 0's,1's & 2's

// Better Approach
// function sort(arr){
//     let count0 = 0
//     let count1 = 0
//     let count2 = 0
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] === 0){
//             count0++
//         }
//         else if(arr[i]===1){
//             count1++
//         }
//         else{
//             count2++
//         }
//     }
//     for(let i = 0; i<count0;i++){
//         arr[i] = 0
//     }
//     for(let i = count0; i<count0 + count1;i++){
//         arr[i] = 1
//     }
//     for(let i = count0 + count1;i<arr.length;i++){
//         arr[i] = 2
//     }
//     return [count0, count1,count2]
// }


// Optimal Approach
function sort(arr){
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        }
        else if(arr[mid] === 1){
            mid++
        }
        else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
}

let array = [0,1,2,0,1,2,1,2,0,0,0,1,2,0]
console.log(sort(array))
console.log(array)