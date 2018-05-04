function largestOfFour(arr){
return arr.map((a)=>{return a.reduce((b,c)=>{return (b>c) ? b : c; })});
}
