// 1 object literals: {}

const user={

    name:'mac',
    age:25,
    gender:'male'

}

console.log(user.name)
console.log(user.age)
console.log(user.gender)

//2 constructio function

function Car(brand,model,price) {
    this.brand=brand,
    this.model=model,
    this.price=price
    
}

const c1=new Car('bmw','520d',2000)
console.log(c1.brand + c1.model + c1.price)


// 3 Class style

class Custmer{

    constructor(name,product)
    {
        this.name=name
        this.product=product
    }

    addToCart()
    {
        console.log(`${this.product} added to cart`)
    }
}

//Instance of the class

const cust1=new Custmer('bala','macbook')
console.log(cust1.name)
console.log(cust1.product)
cust1.addToCart()


