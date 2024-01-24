//Array Question 9
// linear Search

const num = 4
const array = [6,7,8,6,1,3,4,2,0]
function linearSearch(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === num){
            return i
        }
    }
    return -1
}

console.log(linearSearch(array))