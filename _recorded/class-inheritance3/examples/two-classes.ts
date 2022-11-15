{
  class Coach {
    constructor(
      private _name: string,
      private _age: number,
    ) {}

    sayHi() {
      console.log(`Hi! I am your coach ${this._name}. I am ${this._age}`);
    }
  }

  class Student {
    constructor(
      private _name: string,
      private _age: number,
    ) {}

    sayHi() {
      console.log(`Hi! I am a student ${this._name}. I am ${this._age}`);
    }
  }
  
  let misha = new Coach('Misha', 38);
  let petro = new Student('Petro', 57);
  
  misha.sayHi();
  petro.sayHi();
}
