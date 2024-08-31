let a= Math.random()*100;
alert(a);
let user=0;
let i=0;
for(;true;){
  user=prompt("Enter the number");
  if(user==a){
    alert("You won");
    i++;
    console.log("You won in ",(i==1?"1 try":+i+" tries"));
    break;
    }
    else if(user<a){
    alert("Try greater number.")
      i++;
    }
  else if(user>a){
    alert("Try low number");
    i++;
  }
  else{
    alert("Invilid input");
    console.log("you can only try numbers");
  }
}