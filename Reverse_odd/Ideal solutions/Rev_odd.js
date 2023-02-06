let A=[7];
let sum=0;
    let s="";
    for(let i=A.length+1;i>=0;i--){
        if(A[i]%2==1){
            sum=sum+1;
            s=s+A[i]+" ";
        }
    }console.log(sum);
console.log(s);