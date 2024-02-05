//Question 16
// Two Sum

// // Better Approach
// function twoSum(arr,target){
//     const mapp = new Map()
//     for(let i = 0;i<arr.length;i++){
//         const secondNo = target - arr[i]
//         if(mapp.has(secondNo)){
//             return [mapp.get(secondNo), i]
//         }
//         mapp.set(arr[i], i)
//     }
//     return []
// }


// Optimal Approach
function twoSum(arr,target){
    let sorting = arr.sort((a,b)=> a-b)
    let left = 0
    let right = arr.length-1

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === target){
            return "YES"
        }
        else if(sum < target){
            left++
        }
        else{
            right--
        }
    }
    return "NO"
}


let array = [2,6,5,8,11]
let target = 14
console.log(twoSum(array,target))