//Checklet num=1311;
let temp=num;
let ans='';
while(temp>0){
  let m=temp%10;
  ans+=m;
  temp=Math.floor(temp/10)
}console.log(num==ans);