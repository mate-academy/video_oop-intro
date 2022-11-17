{
  interface Greeter {
    sayHi(): void;
  }
  
  class User {
    constructor(
      protected _name: string,
    ) {}
  }

  class Coach extends User implements Greeter {
    sayHi() {
      console.log(`Hi! I am your coach ${this._name}.`);
    }
  }

  class Student extends User implements Greeter {
    sayHi() {
      console.log(`Hi! I am a student ${this._name}.`);
    }
  }
 
  class Mentor extends User implements Greeter {
    sayHi() {
      console.log(`Hi! I am a mentor ${this._name}.`);
    }
  }
 
  let misha = new Coach('Misha');
  let petro = new Student('Petro');
  let john = new Mentor('John');

  greet5([misha, petro, john]);

  function greet5(guests: Greeter[]) {
    for (const guest of guests) {
      guest.sayHi();
    }
  }
}
