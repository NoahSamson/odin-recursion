// iteration
function fibs(count) {
  if (count <= 0) return [];

  const result = [0]; // Initialize the result array with first Fib number
  let a = 0; // First Fibonacci number
  let b = 1; // Second Fibonacci number

  for (let i = 1; i < count; i++) {
    result.push(b);
    const next = a + b;
    a = b;
    b = next;
  }

  return result;
}

// Recursive
function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const result = fibsRec(num - 1);
  const next = result[result.length - 1] + result[result.length - 2];
  result.push(next);

  return result;
}

let iter = fibs(10);
let recurse = fibsRec(10);

console.log(iter);
console.log(recurse);



// num = 10
// const result = fibsRec(9); // Recursive call with num - 1

//   // num = 9
//   const result = fibsRec(8); // Recursive call with num - 1
  
//     // num = 8
//     const result = fibsRec(7); // Recursive call with num - 1
    
//       // num = 7
//       const result = fibsRec(6); // Recursive call with num - 1
      
//         // num = 6
//         const result = fibsRec(5); // Recursive call with num - 1
        
//           // num = 5
//           const result = fibsRec(4); // Recursive call with num - 1
          
//             // num = 4
//             const result = fibsRec(3); // Recursive call with num - 1
            
//               // num = 3
//               const result = fibsRec(2); // Base case for num = 2
//               // result = [0, 1]
              
//             const next = result[result.length - 1] + result[result.length - 2]; // next = 1 + 0 = 1
//             result.push(next); // result = [0, 1, 1]
            
//           const next = result[result.length - 1] + result[result.length - 2]; // next = 1 + 1 = 2
//           result.push(next); // result = [0, 1, 1, 2]
          
//         const next = result[result.length - 1] + result[result.length - 2]; // next = 2 + 1 = 3
//         result.push(next); // result = [0, 1, 1, 2, 3]
        
//       const next = result[result.length - 1] + result[result.length - 2]; // next = 3 + 2 = 5
//       result.push(next); // result = [0, 1, 1, 2, 3, 5]
      
//     const next = result[result.length - 1] + result[result.length - 2]; // next = 5 + 3 = 8
//     result.push(next); // result = [0, 1, 1, 2, 3, 5, 8]
    
//   const next = result[result.length - 1] + result[result.length - 2]; // next = 8 + 5 = 13
//   result.push(next); // result = [0, 1, 1, 2, 3, 5, 8, 13]
  
// const next = result[result.length - 1] + result[result.length - 2]; // next = 13 + 8 = 21
// result.push(next); // result = [0, 1, 1, 2, 3, 5, 8, 13, 21]

// // The recursion ends as num reaches 10, and the result array contains the Fibonacci sequence up to the 10th number.

// console.log(recurse); // [0, 1, 1, 2, 3, 5, 8, 13, 21]

