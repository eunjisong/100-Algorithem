// find the longest word in a string and return the length of the word. 

for findLongestWord(str){
    var arr = str.split(" ");
    var theLongest = arr[0].length; 
    
    for(i=1; i<arr.length; i++){
      if(theLongest<arr[i].length){
        theLongest = arr[i].length; 
      }    
    }
return theLongest;
}
