/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a 
single integer N. Write a js function that takes the array as an argument and returns this “outlier” N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/

function findOutlier(arr) {
    // Initialize counters for odd and even numbers
    let oddCount = 0;
    let evenCount = 0;
    // Initialize variables to store the last odd and even numbers found
    let lastOdd;
    let lastEven;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num % 2 === 0) {
        // Even number
        evenCount++;
        lastEven = num;
      } else {
        // Odd number
        oddCount++;
        lastOdd = num;
      }
  
      // If we have identified both odd and even numbers more than once,
      // the outlier will be the last one found (the one that breaks the pattern).
      if (evenCount > 1 && oddCount > 0) {
        return lastOdd;
      } else if (oddCount > 1 && evenCount > 0) {
        return lastEven;
      }
    }
  }
  
  // Test cases
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // Output: 11
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // Output: 160
  