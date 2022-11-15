{
  class User {
    constructor(
      private _name: string,
      private _age: number,
      private _isCoach: boolean,
    ) {}

    sayHi() {
      let message = 'Hi!';
  
      if (this._isCoach) {
        message += ` I am your coach ${this._name}.`;
      } else {
        message += ` I am a student ${this._name}.`;
      }
    
      message += ` I am ${this._age}`;

      console.log(message);
    }
  }

  let misha = new User('Misha', 38, true);
  let petro = new User('Petro', 57, false);
  
  misha.sayHi();
  petro.sayHi();
}
