// Use .Reduce Method
// sum from 50

function sumReduce(arr){
  return arr.reduce((a,b)=>{return a+b;},50)
}


//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50
