var balance = 0;
if (balance > 0) {
    console.log("balance positive");
} else {
    console.log("balance negative");
}

//switch
var age = 18;
switch (age) {
    case 18:
        console.log("age 18");
        break;
    case 19:
        console.log("age 19");
        break;
    case 20:
        console.log("age 20");
        break;
    default:
        console.log("default");
}

// codigo iterativo
var i = 1;
while (i < 10) {
    balance = balance + 100;
    i++;
}
console.log(balance);

for (var i = 0; i < 10; i++) {
    balance = balance + 100
}
console.log(balance);

var j = 1;
do {
    j++
} while (j < 10)
console.log(j);