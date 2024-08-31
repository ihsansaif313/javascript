let a= prompt("Enter numbers Ex: 1,2,3,4,5");
let arr=[a.length];
let sum=0;
let flag=0;

for(let i=0;i<a.length;i++)
  {
    
    arr[i]=a[i];
    if(arr[i]=='0'||arr[i]=='1'||arr[i]=='2'||arr[i]=='3'||arr[i]=='4'||arr[i]=='5'||arr[i]=='6'||arr[i]=='7'||arr[i]=='8'||arr[i]=='9')
      {
        arr[i]=Number.parseInt(arr[i]);
      }
    
  }
for(let i=1;i<a.length;i++){
  if(typeof(arr[i])=="number")
    {
      arr[flag]+=a[i];
      arr[i]=0;
    }
  else {
    flag++;
    arr[i]=0;
    arr[flag]=arr[i];
  }
}

for(var i=0;i<arr[i];i++){
  arr[i]=Number.parseInt(arr[i]);
  sum+=arr[i];
}
let average=sum/i;
console.log("Mean of those numbers are "+average);