// Find Unique value from array

const arr=[10,20,50,60,20,10,70]
const uniqueArr=[...new Set(arr)] //squed operator (...)

console.log(uniqueArr)

//int to string

const num=32
 const numstr=num + ''
 console.log(numstr+10)

 //swap number
 let a = 10;
 let b = 20;
 [a,b] = [b,a]
 console.log(a,b)

 //Remove falsy value from array  falsy value like(0 false,NaN,undefined,'',null)

 const value=[0,false,undefined,NaN,2,5,1,null,8,9]
 const AftRemove=value.filter(Boolean)
 console.log(AftRemove)

 //check specific value present in array

 const lang=['java','javascript','python','ruby']
if(lang.includes('python'))
{
    console.log('present')
}

//Generate random number

const min=10;
const max=20;
const random=Math.floor(Math.random()*(max-min + 1))+min
console.log(random)

//join array element into string
const words=['hello','good','morning']
const sentance=words.join(' ')
console.log(sentance)

//Get Object Property

const user={

    name:'bala',
    age:25,
    gender:'male'

}

// convert onject into array key

const keyArray=Object.keys(user)
//console.log(keyArray)

//value 
const valueArray=Object.values(user)
console.log(valueArray)

console.log(user.name)

//key-value
const KeyvalueArray=Object.entries(user)
console.log(KeyvalueArray)

//get current date and time
const currentDate=new Date()
console.log(currentDate.toDateString())//.toLocaleDateString()

