// // Array Question 
// // Second largest no. in an array.

// // Better Solution
// function secondLargest(arr){
//     let largest = arr[0]
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     let sLargest = -1
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>sLargest && arr[i] != largest){
//             sLargest = arr[i];
//         }
//     }
//     return sLargest
// }
// let array = [2,5,3,4,8,6,5,7]
// console.log(secondLargest(array))

//Optimal Solution

function secondMax(arr){
    let max = arr[0]
    let sMax = -1

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            sMax = max
            max = arr[i]
        }
        else if(arr[i]> sMax && arr[i]!=max){
            sMax = arr[i]
        }
    }
    return sMax
}
let array = [2,3,6,4,8,9,5]
console.log(secondMax(array))