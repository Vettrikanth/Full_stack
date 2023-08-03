var a=120
console.log("value in var type:",a)
{
    var a=2
    console.log("after altering",a)
}
console.log("outside block",a)

let a2=120
console.log("value in let type:",a2)
{
    let a2=7
    console.log("value in let after altering",a2)
}
console.log("value in let outside block",a2)

let b=200
console.log("value in let type:",b)


const c=100
console.log(c)
const cc=56
console.log(cc)


a3=4 
if (a3===0){
    console.log("Zero")
}
else if(a3>0){
    console.log("Positive")
}
else{
    console.log("Negative")
}


a4=10
for (i=1;i<a4;i++){
    console.log(i)
}
console.log("\n")
i=1
while (i<a4){
    console.log(i)
    i++
}

console.log("\n")
n=1
l1=[100,200,300,400,500]
l1.forEach(i => {
    console.log("elemnt",n)
    console.log(i)
    n++
});