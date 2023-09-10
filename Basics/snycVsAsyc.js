//sync vs Async behaviour

//Synchronous

// Execution done ane by one
//1. Task first
//2.After complete 1st task2 will start
// so on....

console.log('start.....')
for (let i=0;i<5;i++)
{
    console.log(i)
}
console.log('end.....')

//Asynchronous

//JS allow task to be started and continue in the background while programe execute other code.

console.log('Async task Started...')
setTimeout(()=>{

    console.log('time out is done...')
},20000) // wait for 20 sec
console.log('Async task End...')
