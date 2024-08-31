let a= prompt("1.<=0 \n2.>0 and >=17\n3.above 18  \n enter you age");
a= Number.parseInt(a);
switch(a){
    case 1:
    console.log("invilid age");
    break;
    case 2:
    console.log("you are under 18");
    break;
    default:
    console.log("you can drive");
  }