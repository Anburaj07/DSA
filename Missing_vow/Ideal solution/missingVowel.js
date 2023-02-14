function missingVowel(N, str) {
  //write code here
  let obj={
      a:0,
      e:0,
      i:0,
      o:0,
      u:0
  }
  for(let i=0;i<str.length;i++){
      delete obj[str[i]];
  }let s='';
  for(let key in obj){
      s+=key;
  }
  if(s.length==0){
      console.log(-1);
  }else{
      console.log(s);
  }
}
