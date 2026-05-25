class Parent{
    name: string ;


    constructor(name : string){
        this.name = name;
    }

    getSleep(numberOfHours : number){
        console.log(`${this.name} doink ${numberOfHours} ghonta ghumay`);
        
    }
}


class student extends Parent{

    constructor(name:string){
        super(name)
    }


    doStudy(numberOfHours : number){
        console.log(`${this.name} doink ${numberOfHours} ghonta study kore`);
        
    }
}






class teacher extends Parent{
     constructor(name: string){
        super(name);
     }


     takeClass(numberOfHours : number){
        console.log(`${this.name} doink ${numberOfHours} class ney`);
        
    }
}



// function guard
const isStudent =(user: Parent)=>{
    return user instanceof student;
}



const getUserInfo = (user : Parent) =>{
    if( user instanceof student){
        user.doStudy(10);
    }
    else if( user instanceof teacher){
        user.takeClass(5)
    }
    else{
        user.getSleep(15);
    }
}




const student1 = new student ("Mr. Studennt");
const teacher1 = new teacher ("Mr. techer");
const person1 = new Parent ("person");


getUserInfo(person1);