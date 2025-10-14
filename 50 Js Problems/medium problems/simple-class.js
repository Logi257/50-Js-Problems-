class Animals{

    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes noise`);
        
    }
}

let dog = new Animals('Dog')

dog.speak()