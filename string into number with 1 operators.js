function solve(opr,a,b){
  if(opr=="sum"){
    console.log("sum of ",a," and ",b," is ",a+b);
    }
  else if(opr=="subtract"){
    console.log("subtraction of ",a," and ",b," is ",a-b);
    }
  else if(opr=="multiply"){
    console.log("Multiplication of ",a," and ",b," is ",a*b);
    }
  else if(opr=="divide"){
    console.log("Division of ",a," and ",b," is ",a/b);
    }
  else
    console.log("something went wrong");
}
let a =prompt("Enter your question here");
let flag=0;
let b=0;
let c=0;
let d=0;
for(let i = 0; i<a.length;i++){
  if(a[i]=="+")
  {
    d="sum";
    flag++;
    }
    else if(a[i]=="-")
    {
    d="subtract";
      flag++;
    }
      else if(a[i]=="*")
    {
    d="multiply";
      flag++;
    }
        else if(a[i]=="/" || a[i]=="÷")
    {
    d="divide";
      flag++;
    }
  else
  { 
    if(flag==0)
    {
    b += a[i];
    }
   else if(flag==1)
    {
    c += a[i];
    }
    }
}
b=Number.parseInt(b);
c=Number.parseInt(c);
solve(d,b,c);

