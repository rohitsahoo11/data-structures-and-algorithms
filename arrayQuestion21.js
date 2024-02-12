// Question 21
// Reaggange array element by signs

// Brute Approach
// function rearrangeArray(arr) {
//     let posi = [];
//     let neg = [];

//     // Separate positive and negative numbers
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             posi.push(arr[i]); // Add positive numbers to posi array
//         } else {
//             neg.push(arr[i]); // Add negative numbers to neg array
//         }
//     }

//     let i = 0;
//     let j = 0;

//     // Rearrange the array alternately with positive elements at even indices and negative elements at odd indices
//     for (let k = 0; k < arr.length; k++) {
//         if (k % 2 === 0 && i < posi.length) {
//             arr[k] = posi[i]; // Place positive element at even index
//             i++;
//         } else if (j < neg.length) {
//             arr[k] = neg[j]; // Place negative element at odd index
//             j++;
//         }
//     }

//     return arr; // Return the rearranged array
// }


// Optimal Approach
function rearrangeArray(arr){
    let ans = []
    let posIndex = 0
    let negIndex = 1
    for(let i = 0;i<arr.length;i++){
        if(arr[i]> 0){
            ans[posIndex] = arr[i]
            posIndex += 2
        }
        else{
            ans[negIndex] = arr[i]
            negIndex +=2
        }
    }
    return ans
}

let array = [3, 1, -2, -5, 2, -4];
console.log(rearrangeArray(array));
