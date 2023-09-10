// 1 every

let myArr=[10,20,30,40,50]
let flag=myArr.every((e)=>e<100)

console.log(flag)

// 2 some()

let myArr1=[10,20,30,40,50]
let fg=myArr1.some((e)=> e % 2 ===0)
console.log(fg)

// 3 find()
let myArr2=[10,20,30,40,50]
let fe=myArr2.find((e)=> e % 9===0)
console.log(fe)

//4 indecOf()
let myArr3=[10,20,30,40,50]
let index=myArr3.indexOf(40)
console.log(index)

//5 reverse()
let myArr4=[10,20,60,30,40,50]
console.log(myArr4.reverse())

//6 sort()
let myArr5=[10,20,30,70,80,40,50,5,3]
console.log(myArr5.sort())
