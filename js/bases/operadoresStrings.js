var str = "Hello World";
var long = str.length();
console.log(long);

var pos = str.indexOf("World");
console.log(pos);

var pos1 = str.lastIndexOf("World");
console.log(pos1);

var res = str.slice(0, 5);
console.log(res);

var res1 = str.substring(2, 7);
console.log(res1);

var res2 = str.substr(2, 7);

var res3 = str.replace("World", "Bitehes");
console.log(res3);

var res4 = str.toUpperCase()
console.log(res4);

var res5 = res3.concat(" ", "!!!!!");
console.log(res5);