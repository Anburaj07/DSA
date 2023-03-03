function divisibleByM(N,M,arr) {
    //write code here
    let s='';
    for(let i=0;i<arr.length;i++){
        if(arr[i]%M==0){
            s+=-1+' ';
        }
        else{
            s+=arr[i]+" ";
        }
    }console.log(s);
}
