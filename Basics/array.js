let myArray=[]//empty array
let fruit=['banana','appale','mango']//array with string 
let lang=['python','c','c++','java']

console.log('before push: '+lang)

//push

lang.push('rubby','html')

console.log('after push: '+lang)

//pop

let num=[1,2,3,4,5,6]//array with numbers

console.log('before pop number '+num)
num.pop()
console.log('after pop number '+num)

//shift
let fruit1=['banana','appale','mango']
let fr=fruit1.shift()
console.log('shift '+fruit1)
//unshift
fruit1.unshift('orange')
console.log('unshift '+fruit1)

//reverse array
let number=[10,20,30,40,50,60]
//number.reverse()
console.log(number.reverse())
let copy=number.copyWithin(1,3)
//console.log(copy)

