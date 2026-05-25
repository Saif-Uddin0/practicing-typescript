// static




class Counter{
    static count  : number = 0 ;
    incremenet(){
        return Counter.count = Counter.count + 1 ;
    }
    decrement(){
        return Counter.count = Counter.count - 0;
    }
}




const instance1 =  new Counter(); //ekta memory

console.log(instance1.incremenet());
console.log(instance1.incremenet());
console.log(instance1.incremenet());
console.log(instance1.incremenet());



const instance2 = new Counter();  //rekta memory
console.log(instance2.incremenet())
console.log(instance2.incremenet())
