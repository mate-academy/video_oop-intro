{
  class User {
    constructor(
      private _name: string,
      private _age: number,
      private _isCoach: boolean,
      private _isMentor: boolean = false,
    ) {}

    sayHi() {
      let message = 'Hi!';
  
      if (this._isCoach) {
        message += ` I am your coach ${this._name}.`;
      } else if (this._isMentor) {
        message += ` I am a mentor ${this._name}.`;
      } else {
        message += ` I am a student ${this._name}.`;
      }
    
      message += ` I am ${this._age}`;

      console.log(message);
    }

    sayHello() {
      let message = 'Hello!';
  
      if (this._isCoach) {
        message += ` I am your coach ${this._name}.`;
      } else if (this._isMentor) {
        message += ` I am a mentor ${this._name}.`;
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
  petro.sayHello();
}