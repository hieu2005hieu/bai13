let number=prompt("nhap so");
let text="";
for(let x=0;x<number.length;a++){
  if((number[x]%2==0) && (number[x+1]%2==0)){
    text+=number[x]+"-";
  }else{
    text+=number[x];
  }
}
console.log(text);