function processData(input) {
    var n = parseInt(input);
     
    console.log(factorial (n));
    function factorial (n) {
        if (n === 1) {
             return 1;
        }                       
      return(n * (factorial (n-1))); 
         }     
        }
 
