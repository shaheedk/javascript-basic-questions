//    1
//   123
//  12345
let n=3

for (let i=1;i<=n;i++){
    let print=''
    for(let j=1;j<=(n-i);j++){
print+=' '
    }
    for (j=1;j<=i*2-1;j++){
        print+=j
    }
    console.log(print)
}