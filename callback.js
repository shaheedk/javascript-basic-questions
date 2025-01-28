console.log('start')
// sum the values
function getDataFromApi1(callback){
setTimeout(()=>{
    callback(5)
},1000)
}

function getDataFromApi3(callback){
    setTimeout(()=>{
        callback(5)
    },1000)
    }
    function getDataFromApi2(callback){
        setTimeout(()=>{
            callback(5)
        },1000)
        }
        getDataFromApi1((value)=>{
            getDataFromApi2((api2val)=>{
                
           
            getDataFromApi3((api3val)=>{
                
            console.log(api2val+api3val+value)
    
        })
    })
})
        




        console.log('end')
