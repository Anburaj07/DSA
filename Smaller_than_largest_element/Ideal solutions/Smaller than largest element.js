function solve(N,A){
    //write code here
    let lar=A[0];
    for(let i=1;i<A.length;i++){
        if(lar<A[i]){
            lar=A[i];
        }
    }let s='';
    for(let i=0;i<A.length;i++){
        if(A[i]<lar){
            s+=-1+' ';
        }else if(A[i]==lar){
            s+=A[i]+' ';
        }
    }console.log(s);
    }
