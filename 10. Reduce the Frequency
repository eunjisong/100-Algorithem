//Use .Reduce Method 

function strFrequency(arr){
  return arr.reduce(function(obj, ele){
  if(obj[ele]){
    obj[ele]++
  }  
  else
   obj[ele]=1;
   return obj;
  
  },{})
}

//EXAMPLE TEST

var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

console.log(strFrequency(names));
//OUTPUT: {Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1}
