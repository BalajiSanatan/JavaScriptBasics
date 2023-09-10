//declare function
//no need to define any return type

function add(a,b)
{
    return a+b
}

let c=add(5,6)

console.log(c)

//without argument

function printMsg()
{
    console.log('hello moto')
}

printMsg()

// 2 function experession:Annonymous function

const mul=function(x,y)
{
    return x*y
}
let m=mul(5,6)
console.log(m)

//3 Arrow function expression:Annonymous function

const divide=(t1,t2)=>t1/t2
const div=divide(20,2)
console.log(div)

//4 Function Constructor:

const sub=new Function('a','b','return a - b')

const su=sub(90,40)
console.log(su)

//5 IIFE (Immediately Invoked Function Expression)

/*(function(){
    console.log("hello i am learing java script");
})();*/


// squre of given array

const myArr=[1,2,3,4,5,6,7,8,9]
const squre=myArr.map((e)=>{ return e*e})
console.log(squre)

//6 Recurisive Function 4:==>4*3*2*1=24

function factorial(n)
{
    if(n===0||n===1)
    {
        return 1
    }
    else
    {
        return n * factorial(n-1)
    }
}

const fact=factorial(6)
console.log(fact)
