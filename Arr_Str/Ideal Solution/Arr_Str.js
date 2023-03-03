function arrayToStr(N,arr) {
    //write code here
    let s='';
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            s+=0;
    }
    else {
        s+=arr[i];
    }
}console.log(s);
}