function masaiPalSubString(S){
    //write code here
    let max=0;
    for(let i=0;i<S.length;i++){
        let b='';
        for(let j=i;j<S.length;j++){
            b+=S[i];
            let rev=''
            for(let k=b.length-1;k>=0;k--){
                rev+=b[k];
            }
            if(rev==b){
                if(max<rev.length){
                    max=rev.length;
                }
            }
        }
    }console.log(max);
}
