/*
console.log("console.log prints");
console.clear("console.clear clear the console");
console.error("console.error give message of errors in dangrous color");
console.warn("console.warn warns you ");
console.assert(8>4,"  used to assert a condition");
console.info("used for speacial information");
console.table("shows the time b/w console.time() and console.timeEnd()");
console.timeEnd("shows the time b/w console.time() and console.timeEnd()")
*/
// used cases of above console methods
let obj={
  Ihsan: 98,
  Abid: 78,
sami: 89

}
let a=true;
console.time("update");
while(a==true){
a= confirm("Add new marks to data");
  if(a==true){
    let a=prompt("Enter student name");
    for(let i in obj){
      if(a==i){
        console.error(i+" NAME EXISTS. HIS MARKS WAS UPDATED");
      }
    }
   let b=prompt("Enter student marks");
    b=Number.parseInt(b);
    obj[a]=b;
  }
  else{
    break;
  }
  }
console.table(obj);// shows everything in table.
console.timeEnd("update");
location.href="www.google.com"
document.body.style.background="green";
