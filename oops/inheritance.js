class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    speak() {
        return `${this.name} says ${this.sound}`;
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name, "Woof");
        this.breed = breed;
    }

    fetch(item){
        return `${this.name} fetches the ${item}`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow!");
    }
    purr() {
        return `${this.name} purrs...`;
    }
}

const dog = new Dog("Buddy", "Labrador");
console.log(dog.speak());
console.log(dog.fetch("ball"));
console.log(dog.breed);

const cat = new Cat("Whiskers");
console.log(cat.speak());
console.log(cat.purr());