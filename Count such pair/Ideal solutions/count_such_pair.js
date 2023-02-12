function countSuchPairs(N,K,A){
    //write code here
    let count=0;
    for(let i=0;i<A.length;i++){
        for(let j=i+1;j<A.length;j++){
            if(A[i]+A[j]==K){
                count++;
            }
        }
    }console.log(count);
}
