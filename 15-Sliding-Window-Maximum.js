// Assignment Statement
// Time to put your newly learned skills to work!

// This is an interview question asked by Google.drawing

// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

// Submit
// Students will push the solutions to their own public GitHub repos.
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

// Expected Outcome
// For example;
// given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// Example 2;
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Yeni öğrendiğiniz becerilerinizi işe koyma zamanı!

// Bu, Google.drawing tarafından sorulan bir röportaj sorusudur.

// Bir tamsayı dizisi ve bir k sayısı verildiğinde, burada 1 <= k <= dizinin uzunluğu, k uzunluğundaki her bir alt dizinin maksimum değerlerini hesaplayın.

function maxDeğerler(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let elemanK = arr.slice(i, k + i);

    if (k < 1 || k > arr.length) {
      confirm("'k' değeri '0'dan küçük ve  arr uzunluğundan daha büyük olamaz.");
    } else {
      if (elemanK.length < k) {
        break;
      } else {
        result.push(elemanK.sort((a, b) => b - a)[0]);
      }
    }
  }

  return result;
}

console.log(maxDeğerler([1, 3, -1, -3, 5, 3, 6, 7], 2));

// var points = [40, 100, 1, 5, 25, 10];
// points.sort((a,b) => b-a)
// console.log(points[0]);
