var createCounter = function(n) {
    let count=1
    
        return function() {
            if(count===1){
                count++
                return n 
            }else{
                return   n=n+1   
            }
        };
    };
