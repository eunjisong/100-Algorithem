// Return a sentence that capitalized the first letter of each word.

function titleCase(sen){
var arr = sen.split(" ");
var NewArr = arr.map((a)=>{return a[0].toUpperCase()+a.slice(1).toLowerCase();});
return NewArr.join(" ");
}
