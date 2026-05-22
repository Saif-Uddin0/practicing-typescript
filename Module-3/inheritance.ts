class Parent{
    name: string; //common
    age: number; //common
    address: string;  //common


    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }


    //common
    getSleep(numberOfHours : number){
        console.log(`${this.name} ${numberOfHours} ghonta ghumay`);

    }
}









class student extends Parent{}



const student_1 = new student("Mr. fakibaaz", 18, "Mohakhali-Dhaka");

student_1.getSleep(15)








// teacher
class Teacher extends Parent {
    designation: string; //own property


    constructor(name: string, age: number, address: string ,designation: string) {


        super(name ,age , address)
        this.designation = designation;
    }


    //common method


    //own method 
    takeClass(numberOfClass: number) {
        console.log(`${this.name} ${numberOfClass} ghonta class ney`);

    }
}


const teacher1 = new Teacher("Mr. Mofiz", 46, "Dhaka", "Frontend Dev.")

teacher1.takeClass(4)
