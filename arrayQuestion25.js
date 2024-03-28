// Set matrix zeros

function setZeroes(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    // Define functions to mark rows and columns
    function rowMarked(i) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== 0) {
                matrix[i][j] = -1;
            }
        }
    }

    function columnMarked(j) {
        for (let i = 0; i < m; i++) {
            if (matrix[i][j] !== 0) {
                matrix[i][j] = -1;
            }
        }
    }

    // Iterate through the matrix to mark rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowMarked(i);
                columnMarked(j);
            }
        }
    }

    // Replace marked elements with zeros
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }
}

let matrix1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix1);
console.log(matrix1);
