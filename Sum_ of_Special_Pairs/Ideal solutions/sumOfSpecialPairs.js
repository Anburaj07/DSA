function sumOfSpecialPairs(N,A){
    //write code here
    let count=0;
    let s=0;
for(let i=0;i<N;i++){
    for(let j=1;j<N;j++){
        if(i<j){
        let n=Math.abs(j-i);
        let count=0;
    for(let i=1;i<=n;i++){
            if(n%i==0){
             count++;
            }
        }if(count==2){
                s+=Math.abs(A[i]-A[j])
        }
    }
}
}console.log(s);
}
