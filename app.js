// var a=120
// console.log("value in var type:",a)
// {
//     var a=2
//     console.log("after altering",a)
// }
// console.log("outside block",a)

// let a2=120
// console.log("value in let type:",a2)
// {
//     let a2=7
//     console.log("value in let after altering",a2)
// }
// console.log("value in let outside block",a2)

// let b=200
// console.log("value in let type:",b)


// const c=100
// console.log(c)
// const cc=56
// console.log(cc)


// a3=4 
// if (a3===0){
//     console.log("Zero")
// }
// else if(a3>0){
//     console.log("Positive")
// }
// else{
//     console.log("Negative")
// }


// a4=10
// for (i=1;i<a4;i++){
//     console.log(i)
// }

// console.log("\n")

// i=1
// while (i<a4){
//     console.log(i)
//     i++
// }

// console.log("\n")

// n=1
// l1=[100,200,300,400,500]
// l1.forEach(i => {
//     console.log("elemnt",n)
//     console.log(i)
//     n++
// });

const test_arr=[10,20,'abc','e','f']
test_arr.push(3.14)
test_arr.push("Vettri")

for (i in test_arr){
    console.log(test_arr[i])
}
test_arr.pop()
test_arr.pop()
test_arr.pop()
test_arr.pop()
test_arr.pop()
test_arr.pop()
test_arr.pop()

console.log(test_arr)

test_arr.push(1)
if (test_arr.length >0){
    console.log("elements r present")
    for (var ele of test_arr){
        console.log(ele)
    }
}

else{
    console.log("No elements")
}
