const {readFile,writeFile} = require("fs");
console.log('start')

readFile('./content/first.txt','utf8',(err,firstContent)=>{
    if(err){
        console.log(err)
        return 
    }
    const first =firstContent
    readFile('./content/second.txt','utf8',(err,secondContent)=>{
        if(err){
            console.log(err)
            return 
        }
        const second=secondContent
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log('done with this task')    
        })
    })
})
console.log('starting the next task')