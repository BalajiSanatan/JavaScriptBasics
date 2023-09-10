let number=[1,2,3,6,8]

//map function
let doublenumbers=number.map((e)=> e*2)

console.log(doublenumbers)

//2 0filter

let num=[10,22,33,41]

let evennum=num.filter((a)=>a%2===0)
console.log(evennum)

let employee=[{name:'john',age:25,gender:'male'},
              {name:'priya',age:35,gender:'female'},
              {name:'jonny',age:40,gender:'male'},
              {name:'savita',age:45,gender:'female'},
              {name:'reshma',age:30,gender:'female'},
              {name:'sam',age:55,gender:'male'}] //emp array
                                      
let empData=employee.filter((emp)=>{
    return emp.gender==='male' && emp.age>20
})

console.log(empData)

//3 reduce

// addition array element
let myarr=[1,2,3,4,5]
let addarry=myarr.reduce((add,myarr)=> add+myarr,0)
console.log(addarry)

// find max number in given array using reduce
let topArray=[140,60,50,70,30,40,120,210]

let maxEle=topArray.reduce((max,num)=>{
    if(num>max){
        return num
    }
    else{
        return max
    }
},topArray[0])

console.log('max element is : '+maxEle)

//find min number in given array
let MinArray=[100,60,50,70,30,40,120,6,3,110]

let minEle=MinArray.reduce((min,num)=>{
    if(num<min){
        return num
    }
    else{
        return min
    }
},MinArray[0])

console.log('min element is : '+minEle)

// cart and price
let cartItems=[{name:'jean',price:500},
{name:'hat',price:100},
{name:'tshirt',price:500},
{name:'shirt',price:600},
{name:'shoes',price:900} ]


//let totalCartCost=cartItems.reduce((item,total)=>item+total.price,0)
let totalCartCost=cartItems.filter((item,total)=>item+total.price)
console.log(totalCartCost)