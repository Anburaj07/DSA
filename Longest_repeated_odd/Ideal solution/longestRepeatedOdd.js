function longestRepeatedOdd(N, array) {
    //write code here
    let count=0;
    let max=-Infinity;
    for(let i=0;i<N;i++){
    if(checkOdd(array[i])&&(i==0)){
        count=1;
    }else if(checkOdd(array[i])&&(array[i]==array[i-1])){
        count++;
    }else if(checkOdd(array[i])&&(array[i]!=array[i-1])){
        count=1;
    }if(max<count){
        max=count;
    }
    }console.log(max);
}
// Complete the function to check longest repeating odd and reuse it

function checkOdd(num){
	    if(num%2==1){
	        return true;
	    }else{
	        return false;
	    }

}
