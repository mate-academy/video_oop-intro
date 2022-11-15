{
  class User {
    constructor(
      protected _name: string,
      protected _age: number,
    ) {}
  }

  class Coach extends User {
    sayHi() {
      console.log(`Hi! I am your coach ${this._name}. I am ${this._age}`);
    }

    conductLesson() {
      
    }
  }

  class Student extends User {
    sayHi() {
      console.log(`Hi! I am a student ${this._name}. I am ${this._age}`);
    }
  }
 
  class Mentor extends User {
    sayHi() {
      console.log(`Hi! I am a mentor ${this._name}. I am ${this._age}`);
    }
  }
 
  let misha = new Coach('Misha', 38);
  let petro = new Student('Petro', 57);
  
  misha.sayHi();
  petro.sayHi();
}
