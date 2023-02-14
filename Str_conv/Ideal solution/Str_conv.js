let str="abBcd";
let s='';
let a;
for(let i=0;i<str.length;i++){
let S_arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for(let j=0;j<S_arr.length;j++){
    if(str[i]==S_arr[j]){
    a=str[i].toUpperCase();
    s+=a;
    }
  }
  let C_arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(let k=0;k<C_arr.length;k++){
    if(str[i]==C_arr[k]){
      a=str[i].toLowerCase();
      s+=a;
    }
  }
}console.log(s);
