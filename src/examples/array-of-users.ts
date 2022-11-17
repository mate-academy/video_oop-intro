{
  class User {
    constructor(
      protected _name: string,
    ) {}
  }

  class Coach extends User {
    sayHi() {
      console.log(`Hi! I am your coach ${this._name}.`);
    }
  }

  class Student extends User {
    sayHi() {
      console.log(`Hi! I am a student ${this._name}.`);
    }
  }
 
  class Mentor extends User {
    sayHi() {
      console.log(`Hi! I am a mentor ${this._name}.`);
    }
  }
 
  let misha = new Coach('Misha');
  let petro = new Student('Petro');
  let john = new Mentor('John');

  greet1([misha, petro, john]);

  function greet1(guests: User[]) {
    for (const guest of guests) {
      // guest.sayHi();
    }
  }
}
