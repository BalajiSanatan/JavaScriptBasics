class Car{

    constructor(name,model,price) //constructor overloading not allowed in JS
    {
        this.name=name
        this.model=model
        this.price=price
    }

    refuel()
    {
        console.log('please full the tank')
    }
}

const c1=new Car('Audi','520d',15000) //object create c1

console.log(c1.name + " " + c1.model + " " + c1.price)
c1.refuel()