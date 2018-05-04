// nested for-loop T: O(n^2) S: O(1)
function twoNumSum(arr, target){
  for(let i=0; i<arr.length; i++){
    let one = arr[i];
    for(let j=i+1; j<arr.length; j++){
      let two = arr[j];
      if(one + two === target) return [one, two].sort((a,b)=> a-b)
    }
  } return []
}

// Hashing T: O(n) S: O(n);
function twoNumSum(arr, target){
  let obj = {};
  for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]) return [arr[i], target-arr[i]].sort((a,b)=> a-b)
    else obj[arr[i]] = true;
  } return []
}

// using two pointers // T: nLog(n) S: O(1)
function twoNumSum(arr, target){
  arr.sort((a,b)=> a-b) // make sure to sort, otherwise left and right pointers lose its meaning.
  let left = 0; right = arr.length-1;

  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === target) return [arr[left], arr[right]];
    else if(sum < target) left++;
    else if(sum > target) right--;
  } return []
}
