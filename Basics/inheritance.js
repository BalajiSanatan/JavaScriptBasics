// parent class(supre class)

class Vehical{

    constructor(make,model,year)
    {
        this.make=make
        this.model=model
        this.year=year
      
    }

    getInfo()
    {
        return(`${this.make},${this.model},${this.year}`)
    }
    startEngine()
    {
        console.log('Starting Engine....' + this.make)
    }

    stopEngine()
    {
       console.log('Stop Engine....' + this.make)

    }
}
//Child class (Sub Class)
class carr extends Vehical{

    constructor(make,model,year,fuelType) //child class constructor
    {
        super(make,model,year)//call the parent class constructor
        this.fuelType=fuelType
    }

    driveCar()
    {
        console.log('drive car'+'  ' + this.model + "  " + this.fuelType)
    }
}

// another sub class

class Truck extends Vehical{

    constructor(make,model,year,loadingCap) //child class constructor
    {
        super(make,model,year)//call the parent class constructor
        this.loadingCap=loadingCap
    } 

    driveTruck()
    {
        console.log('drive Truck'+ '  ' + this.model + "  "+ this.loadingCap)
    }
}

// create object

const Cw=new carr('Hoda','Civic',1980,'petrol')
const tr=new Truck('Tata','sumo',1920,100)

Cw.startEngine() // acess parent class method
Cw.stopEngine()
console.log(Cw.getInfo())
Cw.driveCar()
Cw.driveTruck() //

console.log('------------')

tr.startEngine() // acess parent class method
tr.stopEngine()
console.log(tr.getInfo())
tr.driveTruck()