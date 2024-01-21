//Question 5 Remove Dluplicates from the array

function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0; // Empty array
    }

    let nonDuplicateIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[nonDuplicateIndex]) {
            nonDuplicateIndex++;
            nums[nonDuplicateIndex] = nums[i];
        }
    }

    // The non-duplicate elements are from index 0 to nonDuplicateIndex (inclusive)
    return nonDuplicateIndex + 1;
}

// Example usage:
let inputArray = [1,1,2,2,2,3,4,4];
let resultLength = removeDuplicates(inputArray);
let resultArray = inputArray.slice(0, resultLength);
console.log(resultArray);
