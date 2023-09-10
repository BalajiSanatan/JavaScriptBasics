// var

var a=10
var a=20 //re-declaration and reinitilization allowed in var
console.log(a)

if(a>5)
{
    console.log("this is true")
}

//let

//scope in block we cant't access outside of block
let b=30
//let b=40 //not aalowed re-declaration and reinitilization
//but we can
let c=30
c=40
console.log(c)

//const
//once we declare we cant change
