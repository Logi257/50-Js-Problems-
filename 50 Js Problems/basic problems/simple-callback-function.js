function greet(name,callback){
    callback(`HI ${name}`)

}

greet("Logesh",message=>console.log(message))