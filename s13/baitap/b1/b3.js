let str=prompt("nhap chu")
let text="";
for(let i=0; i<str.length;i++){
    if(str[i]<"a"){
        text+=str[i].toLowerCase();
    }else {
        text+=str[i].toUpperCase();

    }
}
console.log(text);