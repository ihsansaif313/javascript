let a= prompt("Enter a number");
a= Number.parseInt(a);
console.log("Number is ", (a%2==0 && a%3==0? "divisible by 2 and 3.": "not divisible by 2 and 3"));