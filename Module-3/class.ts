class Animal {
    // name: string;
    // species: string;
    // sound: string;


    constructor(public name: string, public species: string, public sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;

    }

    makeSound() {
        return(`${this.name} is making sound ${this.sound}`);

    }

}

const dog = new Animal("dogesh bhai", "dog", "Ghew ghew");
const cat = new Animal("cat bhai", "cat", "mew mew");
console.log(cat.makeSound());
