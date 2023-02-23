function partyPlanning(N,PamID,M,JimID){
    //write code here
    let obj1={};
    for(let i=0;i<PamID.length;i++){
        if(obj1[PamID[i]]==undefined){
            obj1[PamID[i]]=1;
        }else{
            obj1[PamID[i]]++;
        }
    }
    let s1=''
    for(let key in obj1){
        s1+=key;
    }
    
    let obj2={};
    for(let j=0;j<JimID.length;j++){
        if(obj2[JimID[j]]==undefined){
            obj2[JimID[j]]=1;
        }else{
            obj2[JimID[j]]++;
        }
    }
    let s2=''
    for(let key in obj2){
        s2+=key;
    }
    if(s1==s2){
        console.log("Yes");
    }else{
        console.log("No");
    }
    
}
