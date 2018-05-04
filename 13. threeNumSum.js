// Use a for-loop for a number and nested while looping for two numbers
// T: O(n^2) S: O(n)
function threeNumSum(arr, target){
  let out = []
  arr.sort((a,b) => a-b)
  for(let i=0; i<arr.length-2; i++){
    let left = i + 1, right = arr.length-1;
    while(left < right){
      let sum = arr[i] + arr[left] + arr[right];
      if(sum === target) {
        out.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
      else if(sum < target) left++;
      else if(sum > target) right--;
    }
  } return out;
}
