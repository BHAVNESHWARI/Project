function countChars(S){
    // Write your code here!
    
      let result ="";
      let count =1;
      
       for(let i=1;i<S.length;i++){
         if(S[i] ===S[i-1]){
           count++
         }else {
           result +=S[i-1]+count;
           count=1
         }
    
       }
       result +=S[S.length -1]+count;
       return result;
    
    }
    
    console.log(countChars("aaabbbbcc"));
    