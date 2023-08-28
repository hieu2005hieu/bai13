let vietnamese=["anh","yeu","em"];
let english=["i","love","you"];
let text=prompt("nhap chu can chuyen");
let index=vietnamese.indexOf(text);
if(index!= -1){
    console.log(`chu ${text} chuyen sang tieng anh la ${english[index]}`);
}else{
    console.log("tu k tim thay");
}