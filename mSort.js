// Divide and conquer

// Merge Sort
function mergeSort(arr) {
  // Base case
  // if there is only one element or it is empty then it is already sorted
  if (arr.length <= 1) return arr;

  // Find the middle index of the array
  const mid = Math.floor(arr.length / 2);

  // Split the array into two halves
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursive calls to mergeSort() to sort the left and right values
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted left and right halves
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare Elements from both arrays and add the smaller element to the result array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      result.push(leftArr[leftIndex++]);
    } else {
      result.push(rightArr[rightIndex++]);
    }
  }

  // Add the remaining elements from the left array (if any)
  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex++]);
  }

  // Add the remaining elements from the right array (if any)
  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex++]);
  }

  return result;
}


// Test Arrays
arr1 = [9, 3, 7, 5, 6, 4, 8, 2];
arr2 = [5, 0, 10, -3, -1, 4, 12, -5];

console.log(mergeSort(arr1))

console.log(mergeSort(arr2));
