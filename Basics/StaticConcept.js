class car{

    static wheels=4;

    constructor(model,year,price)
    {
        this.model=model;
        this.year=year;
        this.price=price;
    }

    static start()
    {
        console.log('car is started')
    }

    drive()
    {
        console.log(this.model + ' is driving')
    }
}

const c1=new car('Honda',2022,50)
c1.drive()
car.start() //static method can access using class name
