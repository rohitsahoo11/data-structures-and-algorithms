// Question 13
// Maximum COnsecutive One's
function consecutiveOnes(arr){
    let maxi = 0
    let counter = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            counter++
            maxi = Math.max(maxi,counter)
        }
        else{
            counter = 0
        }
    }
    return maxi
}
let array = [1,1,0,1,1,0,1,1,1,1]
console.log(consecutiveOnes(array))