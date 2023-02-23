function applyBasicMaths(N,A){
    //write code here
    let min=Infinity;
    let index=-1;
    for(let i=0;i<N;i++){
        let sum=0;
        for(let j=0;j<N;j++){
            if(i!=j){
                sum+=A[j];
            }
        }if((sum%7==0)&&(A[i]<min)){
            min=A[i];
            index=i;
        }
    }console.log(index);

}