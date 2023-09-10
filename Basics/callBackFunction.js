//Call Back Function 
//async call/task -- once this task is completed --then only callback function will be called

// basic function

function greet(name,callback)
    {
        // console.log('Hello ' + name)
         callback();
    }

    //callback function
function welcome()
{
  //  console.log('Welcome....!')
} 

greet('Balaji',welcome)


//callback function with asnyc

function printInfo(name,callback)
{
    //async task/fun/step
    setTimeout(function(){
        console.log('printing info for....' + name)
        callback('plz call back me...')
    },5000)
}

//call back

function displayMessage(msg)
{
    console.log(msg)
}

printInfo('Ball',displayMessage)