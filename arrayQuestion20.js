// Question 20
// Best time to Buy and Sell Stock

function maxProfit(arr){
    let mini = arr[0]
    let profit = 0

    for(let i = 1;i<arr.length;i++){
        let cost = arr[i] - mini
        profit = Math.max(profit, cost)
        mini = Math.min(mini, arr[i])
    }
    return profit
}
let array = [7,1,5,3,6,4]
console.log(maxProfit(array))