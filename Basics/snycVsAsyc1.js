const fs= require('fs')

//Synchronous

// const d1=fs.readFileSync('E:\\JavaScriptBasics\\Basics\\data.txt','utf-8')
// console.log(d1)
// console.log('End of File....')

//Aynchronous
fs.readFile('E:\\JavaScriptBasics\\Basics\\data.txt','utf-8',(error,dt)=>{

    console.log(dt)
})

console.log('End of File....')