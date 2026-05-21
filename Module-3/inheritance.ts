class student{
    name: string;
    age: number;
    address: string;


    constructor(name: string,age: number,address: string){
        this.name =name;
        this.age = age;
        this.address = address;
    }


    getSleep(numberOfHours : number){
        console.log(`${this.name} ${numberOfHours} ghonta ghumay`);
        
    }
}



const student_1 = new student("Mr. fakibaaz" , 18 ,"Mohakhali-Dhaka");

student_1.getSleep(1)