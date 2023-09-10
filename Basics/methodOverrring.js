//Method Overriding is possible in JS

class Car{

    constructor(make,model)
    {
        this.make=make;
        this.model=model;
    }

    startEngine()
    {
        console.log('Starting Engine... for Car....')
    }
}

class Audi extends Car{

    //Overriden Method()
    startEngine()
    {
        console.log('Starting Engine... for Audi....')
    }

    autoParking()
    {
        console.log('Audi Auto parking....')
    }
}

const a1=new Audi()
a1.startEngine()
a1.autoParking()

const c1=new Car()
c1.startEngine()
c1.autoParking() //we can not access child method from parent