let B=["A","A","B","A"];
 let a=B[0];
    let flag=true;
    for(let i=1;i<B.length;i++){
        if(B[i]==a){
            flag=true;
        }
        else{
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("Single Type");
    }
    else{
        console.log("Mixed Basket");
    }