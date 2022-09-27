// Declaración de una clase.
class User {};
//Genera una instancia de una clase
// const newUser = new User();

class user {
    // Metodos.

    greetings(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greetings());
const developer = new user();
console.log(developer.greetings());

// constructor
class user{
    // Constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greetings(){
        return 'Hello';
    }
}

const david = new user();

// this

class user{
    constructor(name){
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greetings());

// setters getters

class user{
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} ${this.name} ${this.age}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const developer1 = new user('Aldo', 26);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);