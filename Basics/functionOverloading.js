//function overloading

// we can't overload function in JS

function add(a,b)
{
    return a+b
}

function add(x,y,z)
{
    return x+y+z
}

const funAdd=add(4,5)
console.log(funAdd)


//const funAdd1=add(4,5,6)
//console.log(funAdd1)
