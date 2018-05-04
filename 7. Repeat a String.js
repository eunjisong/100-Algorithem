//Return an empty string if num is not a positive number.

function repeatString(str, num){
return (num>0 ) ? str.repeat(num) : "";
}

//repeat a string without repeat()

function repeatString(str, num){
var output = "";
  for(i=num; i>0; i--){
        output+=str;
   }
   if(num<0){
        return "";
   }
return output; 
}
