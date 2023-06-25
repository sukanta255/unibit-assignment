// return all possible 2D pairs from the given array
function firstCombinationPairs(arr, target) {
    let pairs = [];
      for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
              if (Math.abs(arr[i] + arr[j]) === target) {
                  let pair = [arr[i], arr[j]];
                  let alreadyPresent = false;
                  for (let existingPair of pairs) {
                      if (existingPair.toString() === pair.toString()) {
                          alreadyPresent = true;
                          break;
                      }
                  }
                  if (!alreadyPresent) {
                      pairs.push(pair);
                  }
              }
          }
      }
      let result = new Array(pairs.length);
      for (let i = 0; i < pairs.length; i++) {
          result[i] = pairs[i];
      }
      return result;
  }
  
  // merged the pairs from the previous function and return it by sorted single array
  function mergeSortedArray(arr) {
    let mergedList = [];
    for (let subArray of arr) {
      for (let num of subArray) {
        mergedList.push(num);
      }
    }
    let mergedArray = mergedList.sort((a, b) => a - b);
    return mergedArray;
  }
  
  // return doubling target value
  function doubleTargetValue(target) {
    return target * 2;
  }
  
  // finally this function return all possible pairs from the merged sorted single array
  function secondCombinationPairs(nums, target) {
    let combinations = [];
    nums.sort((a, b) => a - b);
    backtrack(nums, target, 0, [], combinations);
  
    let result = [];
    for (let combination of combinations) {
      result.push(combination);
    }
    return result;
  }
  // recursive function to Generate all possible combination
  function backtrack(nums, target, start, currentCombination, combinations) {
    if (target === 0) {
      combinations.push([...currentCombination]);
      return;
    }
  
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
  
      let num = nums[i];
      if (num > target) {
        break;
      }
  
      currentCombination.push(num);
      backtrack(nums, target - num, i + 1, currentCombination, combinations);
      currentCombination.pop();
    }
  }
  
  // Test case
  let nums = [1, 3, 2, 2, -4, -6, -2, 8];
  let target = 4;
  
  let sumPairs = firstCombinationPairs(nums, target)
  console.log("First Combination for", target + ":",sumPairs)
  
  let mergedArray = mergeSortedArray(sumPairs);
  console.log("Merge Into a single Array:", mergedArray);
  
  let doubledTargetValue = doubleTargetValue(target);
  console.log(doubledTargetValue)
  let combinations = secondCombinationPairs(nums, doubledTargetValue);
  console.log("Second Combination for", doubledTargetValue + ":", combinations);
  
  