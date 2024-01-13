// Question 1 Array
// Sum of Array Elements

function sumOfElement(arr){
    let sum = 0
  for(i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum
}
let arr2 = [1,2,3,4,5]
console.log(sumOfElement(arr2))