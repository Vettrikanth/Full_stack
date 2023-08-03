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

//object aka JSON
car={
    car:"Etios",
    year:2014,
    speed:"145 kmph",
    km:"85k"
}

car.cam={isPresent:"no",exter:"yes",use:"may be"}
var s1="km"

console.log("Max speed:",car.speed)
console.log("year:",car["year"])
console.log("KM:",car[s1])
console.log(car)

car.car="Etios VD"

console.log(car)
console.log("Camera:",car.cam.isPresent)
console.log("Extrenal Camera:",car.cam.exter)

console.log("\n")

for (ele in car){
    console.log(ele,car[ele])
    if (typeof car[ele] === "object")
    {
        for (val in car[ele]){
            console.log(val,car[ele][val])
        }
    }
} 