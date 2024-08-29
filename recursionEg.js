function counter(count){
    console.log(count)
    if(count>1){
        count=count-1
        counter(count)
    }else{
        return;
    }
}
counter(5)
// Without base cases, a recursive function won't know when to stop, resulting in an infinite recursion (error).