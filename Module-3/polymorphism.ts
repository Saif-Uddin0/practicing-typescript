// polymorphism  : bohurupi



class Person{
    getSleep(){
        console.log(`I am a normal person and I sleep for 8 hours`);
        
    }
}


class student extends Person{
    getSleep(){
        console.log(`I am a student . I sleep 7 hours`);
        
    }
}

class nextLevelDev extends Person{
    getSleep() {
        console.log(`I am a developer . I sleep 6 hours`);
        
    }
}