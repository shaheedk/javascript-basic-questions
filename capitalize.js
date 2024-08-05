/*Given a string, capitalize the letters that occupy even indexes and odd indexes
separately, and return as shown below. 
Example:
capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
capitalize(“bridgeon”) = [“BrIdGeOn” , “bRiDgEoN”]
*/

function capitalize(arr){
    let evenIndexCap = '';
  let oddIndexCap = '';
  for (i=0;i<arr.length;i++){
    if (i%2==0){
    
    evenIndexCap+=arr[i].toUpperCase()
    oddIndexCap+=arr[i].toLowerCase()
    }else{
        evenIndexCap+=arr[i].toLowerCase()
        oddIndexCap+=arr[i].toUpperCase()
    }
  }
  return [evenIndexCap,oddIndexCap]
}
console.log(capitalize('abcdef'))