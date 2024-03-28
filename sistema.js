// Solve a linear system of equations Ax = b using Gaussian elimination with partial pivoting
function solveLinearSystem(matrixA, vectorB) {
    const n = matrixA.length;

    // Make a copy of the input arrays to avoid modifying the original ones
    const A = matrixA.map(row => [...row]);
    const b = [...vectorB];

    // Forward elimination
    for (let i = 0; i < n - 1; i++) {
        // Partial pivoting
        let maxRowIndex = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(A[k][i]) > Math.abs(A[maxRowIndex][i])) {
                maxRowIndex = k;
            }
        }
        if (maxRowIndex !== i) {
            [A[i], A[maxRowIndex]] = [A[maxRowIndex], A[i]];
            [b[i], b[maxRowIndex]] = [b[maxRowIndex], b[i]];
        }

        // Elimination step
        for (let j = i + 1; j < n; j++) {
            const factor = A[j][i] / A[i][i];
            for (let k = i; k < n; k++) {
                A[j][k] -= factor * A[i][k];
            }
            b[j] -= factor * b[i];
        }
    }

    // Backward substitution
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += A[i][j] * x[j];
        }
        x[i] = (b[i] - sum) / A[i][i];
    }

    return x;
}



function newtonRaphsonSystem(f, J, x, eps) {
    let iter = 0;
    while (maxNorm(x) > eps && iter < 100) {
      let delta = solveLinearSystem(J(x), negate(f(x)));
      x = addVectors(x, delta);
      iter++;
    }
    return x;
  }
  
  function maxNorm(x) {
    let max = Math.abs(x[0]);
    for (let i = 1; i < x.length; i++) {
      if (Math.abs(x[i]) > max) {
        max = Math.abs(x[i]);
      }
    }
    return max;
  }
  
  function negate(v) {
    let result = [];
    for (let i = 0; i < v.length; i++) {
      result.push(-v[i]);
    }
    return result;
  }
  
  function addVectors(v1, v2) {
    let result = [];
    for (let i = 0; i < v1.length; i++) {
      result.push(v1[i] + v2[i]);
    }
    return result;
  }
  
  // Example usage (replace with your specific functions f and J)
  function f(x) {
    return [0.9 * Math.pow(x[0], 3) + 2 * Math.pow(x[1], 3) - 3, Math.pow(x[1], 1) - Math.pow(x[0], 3) - 1];
  }
  
  function J(x) {
    return [
      [2.7 * Math.pow(x[0], 2), 6 * Math.pow(x[1], 2)],
      [-3 * Math.pow(x[0], 2), 1]
    ];
  }
  
  let initialGuess = [0.6, 1.2]; // Replace with your initial guess
  let tolerance = 0.001;
  
  let solution = newtonRaphsonSystem(f, J, initialGuess, tolerance);
  console.log("Solution:", solution);
  